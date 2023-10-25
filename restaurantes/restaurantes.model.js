const mongoose = require('mongoose');

const restaurantesSchema = mongoose.Schema(
  {
    // campos
      name: { type: String, required: [true], unique: [true]},
      direccion: { type: String, required: [true] },
      categorias: {
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

export default mongoose.model('Restaurantes', restaurantesSchema);
