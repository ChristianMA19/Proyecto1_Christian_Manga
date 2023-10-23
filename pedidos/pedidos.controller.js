
import Pedidos from './pedidos.model';

export async function getpedidos(req,res) {
  // const { name } = req.query;
  const idusuario = req.params.idusuario;
  console.log(idusuario);

  const pedidoss = await pedidos.find(req.query);

  res.status(200).json(pedidoss);
}

export async function getpedidosid(req,res) {
  try{
    const idpedidos = req.params.idpedidos;
    const pedido = await Pedidos.findById(idpedidos);
    res.status(200).json(pedido);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getpedidosNOA(req,res) {
  try{
    const pedidosNOA = await Pedidos.find({estadoP: 'Creado'});
    res.status(200).json(pedidosNOA);
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
      const resultado = await Pedidos.findByIdAndUpdate(idpedidos,pedido, { new: true });
      if (!resultado) {
        return res.status(404).json({ mensaje: 'Pedido no encontrado' });
      }
      res.status(200).json({});
    }else{
      res.status(404).json({mensaje:'El pedido ya fue entregado'});
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
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.status(200).json({});
  } catch (err) {
    res.status(500).json(err);
  }
}