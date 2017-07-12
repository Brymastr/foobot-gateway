module.exports = () => {
  const env = process.env;
  return config = {
    PORT: env.PORT || 3000,
    
    ADMIN_SERVICE: env.ADMIN_SERVICE || 'http://localhost:3001',
    MESSAGES_SERVICE: env.MESSAGES_SERVICE || 'http://localhost:3002'
  }
};

