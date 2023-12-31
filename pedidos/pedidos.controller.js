
import Pedidos from './pedidos.model';

export async function getpedidos(req,res) {
  try{
    const query = {};
    query.isDeleted = false;

    if(req.query.idUsuario){
      query.idUsuario = req.query.idUsuario;
    }
    if(req.query.idRestaurante){
      query.idRestaurante = req.query.idRestaurante;
    }
    if(req.query.timestampi && req.query.timestampf){//2023-10-23T01:04:00.000Z Para realizar pruebas
      const timestampi = new Date(req.query.timestampi);
      const timestampf = new Date(req.query.timestampf);
      query.createdAt = { $gte: timestampi, $lte: timestampf }
    }
    if(req.query.isDeleted){
      query.isDeleted = req.query.isDeleted;
    }

    const pedidos = await Pedidos.find(query);

    if(pedidos.length == 0||!pedidos ){
      return res.status(404).json('Pedidos no encontrados o deleted');
    }else{
      res.status(200).json(pedidos);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getpedidoid(req,res) {
  try{
    const idpedidos = req.params.idpedidos;
    const pedido = await Pedidos.findById(idpedidos);
    if(pedido.isDeleted){
      res.status(404).json("Pedido no encontrado, este puede estar deleted.");
    }else{
      res.status(200).json(pedido);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getpedidosNOA(req,res) {
  try{
    const query ={}
    query.isDeleted = false;
    query.estadoP = 'Creado';
    if(req.query.isDeleted){
      query.isDeleted = req.query.isDeleted;
    }
    const pedidosNOA = await Pedidos.find(query);
    if(pedidosNOA.length == 0||!pedidosNOA ){
      return res.status(404).json('Pedidos no encontrados o deleted');
    }else{
      res.status(200).json(pedidosNOA);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function createpedidos(req, res) {
  try {
    const order = req.body;
    const pedido = new Pedidos(order);
    const resultado = await pedido.save();
    res.status(200).json(resultado);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function patchpedidos(req, res) {
  try {
    const idpedidos = req.params.idpedidos;
    const pedido = req.body;
    const verificacion = await Pedidos.findById(idpedidos);
    if(verificacion.estadoP!="Entregado"){
      const resultado = await Pedidos.findByIdAndUpdate(idpedidos,pedido);
      if (!resultado) {
        return res.status(404).json('Pedido no encontrado');
      }else{
        res.status(200).json("Pedido actualizado");
      }
    }else{
      res.status(404).json('El pedido ya fue entregado');
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function deletepedidos(req, res) {
  try {
    const idpedidos = req.params.idpedidos;
    const resultado = await Pedidos.findByIdAndUpdate(idpedidos,{ isDeleted: 'true' });
    if (!resultado) {
      return res.status(404).json('Pedido no encontrado');
    }else{
      res.status(200).json("Pedido eliminado");
    }
  } catch (err) {
    res.status(500).json(err);
  }
}