
import Restaurantes from './restaurantes.model';

export async function getrestaurantes(req,res) {
  try{
    const query = {};
    query.isDeleted = false;

    if(req.query.name){
      query.name = {$regex: req.query.name, $options: 'i'};
    }
    if(req.query.categorias){
      query.categorias = req.query.categorias
    }
    if(req.query.isDeleted){
      query.isDeleted = req.query.isDeleted;
    }
    
    const restaurantes = await Restaurantes.find(query);
    console.log(restaurantes.length == 0);
    if (!restaurantes.length) {
      return res.status(404).json("Restaurantes no encontrados");
    }else{
      res.status(200).json(restaurantes);
    }
    
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getrestauranteid(req,res) {
  try{
    const idrestaurante = req.params.idrestaurante;
    const restaurante = await Restaurantes.findById(idrestaurante);
    if(restaurante==null || restaurante.isDeleted){
      res.status(404).json("Restaurante no encontrado, este puede estar deleted o no existir.");
    }else{
      res.status(200).json(restaurante);
    }
  } catch (err) {
    res.status(500).json(err);
  }
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
  try{
    const idrestaurante = req.params.idrestaurante;
    const restaurante = req.body;
    const resultado = await Restaurantes.findByIdAndUpdate(idrestaurante,restaurante, { new: true });
    if (!resultado) {
      return res.status(404).json('Restaurante no encontrado');
    }else{
      res.status(200).json("Restaurante actualizado");
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function deleterestaurantes(req, res) {
  try{
    const idrestaurante = req.params.idrestaurante;
    const resultado = await Restaurantes.findByIdAndUpdate(idrestaurante,{ isDeleted: 'true' });
    if (!resultado) {
      return res.status(404).json('Restaurante no encontrado');
    }else{
      res.status(200).json("Restaurante eliminado");
    }
  } catch (err) {
    res.status(500).json(err);
  }
}