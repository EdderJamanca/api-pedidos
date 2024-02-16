// require('dotenv').config();
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const { BDconnection }=require('./bd/connection');
const router=require('./router');


const {logError,
  errorHandler,
  boomErrorHandler}=require('./middlewares/error.handler');




const app= express();

app.use(cors());

BDconnection();

// habilitando el body parse

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// agregando la ruta
app.use('/v1',router);

app.use(boomErrorHandler);
app.use(logError);
app.use(errorHandler);


module.exports=app;
