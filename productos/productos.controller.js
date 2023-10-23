
import Productos from './productos.model';

export async function getproductos(req,res) {
  // const { name } = req.query;

  const productoss = await productos.find(req.query);

  res.status(200).json(productoss);
}

export async function createproductos(req, res) {
  try {
    const product = req.body;
    const producto = new Productos(product);
    const resultado = await producto.save();
    res.status(200).json(resultado);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function patchproductos(req, res) {
  res.status(200).json({});
}

export async function deleteproductos(req, res) {
  const idproducto = req.params.idproducto;
  const resultado = await Usuarios.findByIdAndUpdate(idproducto,{ isDeleted: 'true' });
  if (!resultado) {
    return res.status(404).json({ mensaje: 'Usuario no encontrado' });
  }
  res.status(200).json({});
}