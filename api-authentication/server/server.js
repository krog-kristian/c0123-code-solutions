import 'dotenv/config';
import pg from 'pg';
import argon2 from 'argon2';
import express from 'express';
import jwt from 'jsonwebtoken';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
app.use(express.json());

app.post('/api/auth/sign-up', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ClientError(400, 'username and password are required fields');
    }
    const hashedPassword = await argon2.hash(password);
    const sql = `
      insert into "users" ("username", "hashedPassword")
      values ($1, $2)
      returning *
    `;
    const params = [username, hashedPassword];
    const result = await db.query(sql, params);
    const [user] = result.rows;
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

/**
 * Checks reuqest for username and password and vierfies with
 * argon2 against the database and returns a token, and object with userId and username.
 */
app.post('/api/auth/sign-in', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ClientError(401, 'invalid login');
    }
    const sql = `
                select "userId", "hashedPassword"
                from "users"
                where "username" = $1
                `;
    const data = await db.query(sql, [username]);
    if (!data.rows[0]) {
      res.status(401).json({ error: 'username does not exist.' });
    } else {
      const { userId, hashedPassword } = data.rows[0];
      const verify = await argon2.verify(hashedPassword, password);
      if (verify) {
        const payload = {
          userId,
          username
        };
        const token = jwt.sign(payload, process.env.TOKEN_SECRET);
        res.status(200).json({ payload, token });
      } else {
        res.status(401).json({ error: 'Invalid login.' });
      }
    }
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
