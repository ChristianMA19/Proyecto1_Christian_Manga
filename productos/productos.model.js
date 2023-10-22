const mongoose = require('mongoose');

const productosSchema = mongoose.Schema(
  {
    // campos
    name: { type: String, required: [true, 'Nombra tu productos.'] },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('productos', productosSchema);
