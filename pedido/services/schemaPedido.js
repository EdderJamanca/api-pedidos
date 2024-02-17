
const {Schema,model}=require('mongoose');

const schemaPedido=new Schema({
  cliente:{
    type:Schema.ObjectId,
    ref:'Cliente'
  },
  pedido:[{
    producto:{
      type:Schema.ObjectId,
      ref:'Producto'
    },
    cantidad:{
      type:Number,
      require:true
    }
  }],
  total:{
    type:Number,
    require:true,
    trim:true
  }
})

module.exports=model('Pedido',schemaPedido);
