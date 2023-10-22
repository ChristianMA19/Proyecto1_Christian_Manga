const mongoose = require('mongoose');

const restaurantesSchema = mongoose.Schema(
  {
    // campos
    name: { type: String, required: [true, 'Nombra tu restaurantes.'] },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model('restaurantes', restaurantesSchema);
