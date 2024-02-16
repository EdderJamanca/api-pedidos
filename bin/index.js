require('dotenv').config();

const app=require('./../index');

function normalizePort(valor){
  const port=parseInt(valor,10);

  if(isNaN(port)){return valor};

  if(port>=0){return port}

  return false;
}


const port=normalizePort(process.env.PORT || '3000');

app.listen(port);
