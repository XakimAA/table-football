import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import UserModel from "./schemas";
//import UserController from "./controllers";
import {UserController} from './controllers/UserController';

var app = express();

app.use(bodyParser.json());

const User = new UserController();

mongoose.connect('mongodb://localhost:27017/football', {
  useNewUrlParser: true,
  useCreateIndex:true,
  useFindAndModify:true
});

app.get('/user/:id', User.index);
app.post('/user/create', User.create);
app.delete('/user/:id', User.delete);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
