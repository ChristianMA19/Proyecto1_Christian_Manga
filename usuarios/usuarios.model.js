const mongoose = require('mongoose');

const usuariosSchema = mongoose.Schema(
  {
    // campos
    name: { type: String, required: [true, 'Nombra tu usuarios.'] },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('usuarios', usuariosSchema);
