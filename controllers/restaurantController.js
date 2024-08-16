const Restaurant = require('../models/Restaurant');

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const searchRestaurants = async (req, res) => {
  try {
    const { categoria, bairro } = req.query;

    // Cria um filtro com base nos parâmetros de consulta
    const filter = {};

    if (categoria) {
      filter.categoria = categoria;
    }

    if (bairro) {
      filter.bairro = bairro;
    }

    const restaurants = await Restaurant.find(filter);
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createRestaurant = async (req, res) => {
  const { nome, categoria, preco, bairro, endereco } = req.body;

  try {
    // Cria uma nova instância do modelo Restaurant
    const newRestaurant = new Restaurant({
      nome,
      categoria,
      preco,
      bairro,
      endereco,
    });

    // Salva o restaurante no banco de dados
    const savedRestaurant = await newRestaurant.save();
    res.status(201).json(savedRestaurant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateRestaurant = async (req, res) => {
  const { id } = req.params;
  const { nome, categoria, preco, bairro, endereco } = req.body;

  try {
    // Atualiza o restaurante com o ID fornecido
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      id,
      { nome, categoria, preco, bairro, endereco },
      { new: true } // Retorna o documento atualizado
    );

    if (!updatedRestaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    res.json(updatedRestaurant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteRestaurant = async (req, res) => {
  const { id } = req.params;

  try {
    // Remove o restaurante com o ID fornecido
    const deletedRestaurant = await Restaurant.findByIdAndDelete(id);

    if (!deletedRestaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    res.json({ message: 'Restaurant deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getRestaurants,
  searchRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
