
import restaurantes from './restaurantes.model';

export async function getrestaurantes(req,res) {
  // const { name } = req.query;

  const restaurantess = await restaurantes.find(req.query);

  res.status(200).json(restaurantess);
}

export async function createrestaurantes(req, res) {
  try {
    const restaurant = req.body;
    const restaurante = new restaurantes(restaurant);
    const resultado = await restaurante.save();
    res.status(200).json(resultado);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function patchrestaurantes(req, res) {
  res.status(200).json({});
}

export async function deleterestaurantes(req, res) {
  res.status(200).json({});
}