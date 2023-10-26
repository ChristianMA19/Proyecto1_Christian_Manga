
import Usuarios from './usuarios.model';

export async function getusuarioscorpas(req,res) {
  try{
    //const { correo , password } = req.params;
    const query = req.query;
    query.isDeleted = false;
    const usuariocorpas = await Usuarios.find(query);

    res.status(200).json(usuariocorpas);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function getusuariosid(req,res) {
  try{
    const idusuario = req.params.idusuario;
    const usuarios = await Usuarios.findById(idusuario);
    if(usuarios.isDeleted){
      res.status(400).json("usuario no encontrado, este puede estar deleted.");
    }else{
      res.status(200).json(usuarios);
    }
  } catch (err) {
    res.status(500).json(err);
  }
}


export async function createusuarios(req, res) {
  try {
    const user = req.body;
    const usuario = new Usuarios(user);
    const resultado = await usuario.save();
    res.status(200).json(resultado);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function patchusuarios(req, res) {
  try{
    const idusuario = req.params.idusuario;
    const user = req.body;
    const resultado = await Usuarios.findByIdAndUpdate(idusuario,user, { new: true });
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.status(200).json({});
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function deleteusuarios(req, res) {
  try{
    const idusuario = req.params.idusuario;
    const resultado = await Usuarios.findByIdAndUpdate(idusuario,{ isDeleted: 'true' });
    if (!resultado) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.status(200).json({});
  } catch (err) {
    res.status(500).json(err);
  }
}