
import Usuarios from './usuarios.model';

export async function getusuarios(req,res) {
  // const { name } = req.query;
  const idusuario = req.params.idusuario;
  console.log(idusuario);

  const usuarioss = await usuarios.find(req.query);

  res.status(200).json(usuarioss);
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