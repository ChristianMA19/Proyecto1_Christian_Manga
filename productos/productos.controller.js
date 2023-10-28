
import Productos from './productos.model';

export async function getproductos(req,res) {
  try{
    const query = {};
    query.isDeleted = false;
    if(req.query.categoria){
      query.categoria = req.query.categoria;
    }
    if(req.query.idRestaurante){
      query.idRestaurante = req.query.idRestaurante;
    }
    if(req.query.isDeleted){
      query.isDeleted = req.query.isDeleted;
    }
    
    const productos = await Productos.find(query);
    if (productos.length == 0||!productos ){
      return res.status(404).json('Productos no encontrados o deleted');
    }else{
      res.status(200).json(productos);
    }
    
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getproductoid(req,res) {
  try{
    const idproducto = req.params.idproducto;
    const producto = await Productos.findById(idproducto);
    if(producto.isDeleted){
      res.status(404).json("Producto no encontrado, este puede estar deleted.");
    }else{
      res.status(200).json(producto);
    }
  } catch (err) {
    res.status(500).json(err);
  }
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
  try {
    const idproducto = req.params.idproducto;
    const producto = req.body;
    const resultado = await Productos.findByIdAndUpdate(idproducto,producto);
    if (!resultado) {
      return res.status(404).json('Producto no encontrado');
    }else{
      res.status(200).json(resultado);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function deleteproductos(req, res) {
  try{
    const idproducto = req.params.idproducto;
    const resultado = await Productos.findByIdAndUpdate(idproducto,{ isDeleted: 'true' });
    if (!resultado) {
      return res.status(404).json('Producto no encontrado');
    }else{
      res.status(200).json("Producto eliminado");
    }
  } catch (err) {
    res.status(500).json(err);
  }
}