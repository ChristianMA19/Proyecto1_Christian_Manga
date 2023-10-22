const mongoose = require('mongoose');

const pedidosSchema = mongoose.Schema(
  {
    // campos
    name: { type: String, required: [true, 'Nombra tu pedidos.'] },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('pedidos', pedidosSchema);
