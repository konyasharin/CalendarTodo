import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import * as mongoose from "mongoose";
import * as UserController from './controllers/UserController';

function createConnectionString(login: string, password: string, string: string): string{
  const loginReplace = "<login>"
  const passwordReplace = "<password>"
  string = string.substring(0, string.indexOf(loginReplace)) + login + ":" +
    encodeURIComponent(password) + string.substring(string.indexOf(passwordReplace) + passwordReplace.length)
  return string
}

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const CONNECTION_STRING = createConnectionString(process.env.LOGIN!, process.env.PASSWORD!, process.env.DB_CONNECT!)

app.use(express.json());
app.use(cors())

mongoose.connect(CONNECTION_STRING)
  .then(() => console.log("connect successfull"))

app.listen(PORT, () => {
  console.log("successfully run")
})

app.post("/auth/registration",  UserController.registration)