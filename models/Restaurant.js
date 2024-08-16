const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  categoria: { type: String, required: true },
  preco: { type: String, required: true, enum: ['baixo', 'médio', 'alto', 'muito alto'] },
  bairro: { type: String, required: true },
  endereco: { type: String, required: true },
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);