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
    productosid: {
      type: [String], 
      required: [true],
      validate: {
        validator: function(categoriasArray) {
          return categoriasArray.length > 0;
        },
        message: 'Debe haber al menos una categoría.'
      },
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('Pedidos', pedidosSchema);
