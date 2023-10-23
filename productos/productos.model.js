const mongoose = require('mongoose');

const productosSchema = mongoose.Schema(
  {
    // campos
    name: { type: String, required: [true, 'Nombre producto.'] },
    descripcion: { type: String, required: [true, 'Descripcion producto.'] },
    categoria: { type: String, required: [true, 'Categoria del producto.'] },
    precio: { type: Number, required: [true, 'Precio del producto.'] },
    idRestaurante: { type: String, required: [true] },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('productos', productosSchema);
