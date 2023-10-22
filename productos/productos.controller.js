
import productos from './productos.model';

export async function getproductos(req,res) {
  // const { name } = req.query;

  const productoss = await productos.find(req.query);

  res.status(200).json(productoss);
}

export async function createproductos(req, res) {
  try {
    const { name } = req.body;
    const productos = new productos({ name });
    const resultado = await productos.save();
    res.status(200).json(resultado);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function patchproductos(req, res) {
  res.status(200).json({});
}

export async function deleteproductos(req, res) {
  res.status(200).json({});
}