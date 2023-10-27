import { ObjectId } from 'mongodb';

const mongoose = require('mongoose');

const pedidosSchema = mongoose.Schema(
  {
    // campos
    idUsuario: { type: ObjectId, required: [true] },
    idRestaurante: { type: ObjectId, required: [true] },
    idDomiciliario: { type: ObjectId, required: [false] },
    estadoP: {
      type: String, 
      required: [true],
      enum: ['Creado', 'En Curso', 'En Camino', 'Entregado']
    },
    productosid: {
      type: [ObjectId], 
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
