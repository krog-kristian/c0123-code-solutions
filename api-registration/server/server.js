import 'dotenv/config';
import pg from 'pg';
import argon2 from 'argon2';
import express from 'express';
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
    const sql = `
                insert into "users" ("username", "hashedPassword")
                values ($1, $2)
                returning *;
                `;
    const hashedPassword = await argon2.hash(password);
    const params = [username, hashedPassword];
    const data = await db.query(sql, params);
    const response = {
      userId: data.rows[0].userId,
      userName: data.rows[0].username,
      createdAt: data.rows[0].createdAt
    };
    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
