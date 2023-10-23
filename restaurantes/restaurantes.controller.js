
import Restaurantes from './restaurantes.model';

export async function getrestaurantes(req,res) {
  // const { name } = req.query;

  const restaurantess = await restaurantes.find(req.query);

  res.status(200).json(restaurantess);
}

export async function createrestaurantes(req, res) {
  try {
    const restaurant = req.body;
    const restaurante = new Restaurantes(restaurant);
    const resultado = await restaurante.save();
    res.status(200).json(resultado);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function patchrestaurantes(req, res) {
  const idrestaurante = req.params.idrestaurante;
  const restaurante = req.body;
  const resultado = await Usuarios.findByIdAndUpdate(idrestaurante,restaurante, { new: true });
  if (!resultado) {
    return res.status(404).json({ mensaje: 'Restaurante no encontrado' });
  }
  res.status(200).json({});
}

export async function deleterestaurantes(req, res) {
  const idrestaurante = req.params.idrestaurante;
  const resultado = await Usuarios.findByIdAndUpdate(idrestaurante,{ isDeleted: 'true' });
  if (!resultado) {
    return res.status(404).json({ mensaje: 'Restaurante no encontrado' });
  }
  res.status(200).json({});
}