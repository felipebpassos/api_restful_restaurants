const mongoose = require('mongoose');
const User = require('./models/User'); // Certifique-se de que o caminho está correto

const MONGO_URI = 'mongodb://localhost:27017/restaurants-api'; // Substitua pelo seu URI MongoDB

const seedDatabase = async () => {
  try {
    // Conectando ao MongoDB
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');

    const username = 'felipebpassos'; // Substitua pelo username desejado
    const password = 'admin123'; // Substitua pela senha desejada

    // Verifica se o usuário já existe
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      console.log('User already exists');
      process.exit();
    }

    // Cria um novo usuário (a senha será automaticamente hashed pelo middleware `pre('save')`)
    const user = new User({
      username,
      password, // Não faça hashing aqui
    });

    await user.save();
    console.log('User added successfully');

    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
