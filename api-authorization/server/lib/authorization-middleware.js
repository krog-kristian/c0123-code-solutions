/* eslint-disable no-unused-vars -- Remove me */
import jwt from 'jsonwebtoken';
import { ClientError } from './client-error.js';

export function authorizationMiddleware(req, res, next) {
  const authorization = req.get('authorization');
  if (!authorization) throw new ClientError(401, 'Authorization Required.');
  const token = authorization.split('Bearer ')[1];
  const payload = jwt.verify(token, process.env.TOKEN_SECRET);
  req.user = payload;
  next();
}

/**
  * References:
  * https://expressjs.com/en/4x/api.html#req.get
  * https://nodejs.org/api/http.html#http_message_headers
  * https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
  */
