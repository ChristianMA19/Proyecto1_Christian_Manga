
import pedidos from './pedidos.model';

export async function getpedidos(req,res) {
  // const { name } = req.query;

  const pedidoss = await pedidos.find(req.query);

  res.status(200).json(pedidoss);
}

export async function createpedidos(req, res) {
  try {
    const order = req.body;
    console.log(order);
    const pedido = new pedidos(order);
    const resultado = await pedido.save();
    res.status(200).json(resultado);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function patchpedidos(req, res) {
  res.status(200).json({});
}

export async function deletepedidos(req, res) {
  res.status(200).json({});
}