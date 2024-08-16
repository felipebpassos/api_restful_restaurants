const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  // Verificar se o token está no cabeçalho da autorização
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Obter o token do cabeçalho
      token = req.headers.authorization.split(' ')[1];

      // Decodificar o token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Adicionar o usuário ao objeto de solicitação
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };