const mongoose = require('mongoose');

const usuariosSchema = mongoose.Schema(
  {
    // campos
    name: { type: String, required: [true, 'Nombra tu usuario.'], unique: [true] },
    password: { type: String, required: [true, 'Introduce tu contraseña.'] },
    correo: { type: String, required: [true, 'Introduce tu correo.'], unique: [true] },
    celular: { type: String, required: [true, 'Introduce tu celular.'], unique: [true] },
    direccion: { type: String, required: [true, 'Introduce tu direccion.'] },
    opcion: {
      type: String, 
      required: [true, 'Selecciona la opcion que vayas a usar.'],
      enum: ['cliente', 'administrador de restaurante', 'domiciliario']
    },

    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('usuarios', usuariosSchema);
