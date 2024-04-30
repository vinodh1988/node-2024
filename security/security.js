import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()
console.log(process.env.JWT_SECRET)
import { body, validationResult } from 'express-validator';
const route = express.Router()
export const generateToken = (user) => {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  };
  
export  const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer TOKEN
    if (!token) return res.sendStatus(401);
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  };
  
  route.post('/login', body('username').isString(), body('password').isString(), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { username, password } = req.body;
    if (username === "admin" && password === "password") {
      const user = { id: username };
      const token = generateToken(user);
      res.json({ accessToken: token });
    } else {
      res.status(401).send('Username or password incorrect');
    }
  });
  
  export default route;