
import Pedidos from './pedidos.model';

export async function getpedidos(req,res) {
  // const { name } = req.query;
  const idusuario = req.params.idusuario;
  console.log(idusuario);

  const pedidoss = await pedidos.find(req.query);

  res.status(200).json(pedidoss);
}

export async function createpedidos(req, res) {
  try {
    const order = req.body;
    console.log(order);
    const pedido = new Pedidos(order);
    const resultado = await pedido.save();
    res.status(200).json(resultado);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function patchpedidos(req, res) {
  const idpedidos = req.params.idpedidos;
  const pedido = req.body;
  const resultado = await Usuarios.findByIdAndUpdate(idpedidos,pedido, { new: true });
  if (!resultado) {
    return res.status(404).json({ mensaje: 'Pedido no encontrado' });
  }
  res.status(200).json({});
}

export async function deletepedidos(req, res) {
  const idpedidos = req.params.idpedidos;
  const resultado = await Usuarios.findByIdAndUpdate(idpedidos,{ isDeleted: 'true' });
  if (!resultado) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }
  res.status(200).json({});
}