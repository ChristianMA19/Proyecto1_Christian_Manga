const mongoose = require('mongoose');

const pedidosSchema = mongoose.Schema(
  {
    // campos
    idUsuario: { type: String, required: [true] },
    idRestaurante: { type: String, required: [true] },
    estadoP: {
      type: String, 
      required: [true],
      enum: ['Creado', 'En Curso', 'En Camino', 'Entregado']
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('Pedidos', pedidosSchema);
