
import Productos from './productos.model';

export async function getproductos(req,res) {
  try{
    const { categoria, name } = req.query;  
    const query = {};
    if (categoria.length == 0) {
      query.name = { $regex: name, $options: 'i' };
      query.isDeleted = false;
    }else if(name.length == 0){
      query.categorias = { $in: categoria.split(",") };
      query.isDeleted = false;
    }else{
      query.categorias = { $in: categoria.split(",") };
      query.name = { $regex: name, $options: 'i' };;
      query.isDeleted = false;
    }

    const restaurantes = await Productos.find(query);
    if (!restaurantes) {
      return res.status(404).json({ mensaje: 'Restaurantes no encontrados' });
    }
    res.status(200).json(restaurantes);
    
  } catch (err) {
    res.status(500).json(err);
  }

  const productoss = await productos.find(req.query);

  res.status(200).json(productoss);
}

export async function getproductoid(req,res) {
  try{
    const idproducto = req.params.idproducto;
    const producto = await Productos.findById(idproducto);
    res.status(200).json(producto);
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
    const resultado = await Productos.findByIdAndUpdate(idproducto,producto, { new: true });
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Pedido no encontrado' });
    }
    res.status(200).json({});
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function deleteproductos(req, res) {
  try{
    const idproducto = req.params.idproducto;
    const resultado = await Productos.findByIdAndUpdate(idproducto,{ isDeleted: 'true' });
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Pedido no encontrado' });
    }
    res.status(200).json({});
  } catch (err) {
    res.status(500).json(err);
  }
}