
import usuarios from './usuarios.model';

export async function getusuarios(req,res) {
  // const { name } = req.query;

  const usuarioss = await usuarios.find(req.query);

  res.status(200).json(usuarioss);
}

export async function createusuarios(req, res) {
  try {
    const { name } = req.body;
    const usuarios = new usuarios({ name });
    const resultado = await usuarios.save();
    res.status(200).json(resultado);
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function patchusuarios(req, res) {
  res.status(200).json({});
}

export async function deleteusuarios(req, res) {
  res.status(200).json({});
}