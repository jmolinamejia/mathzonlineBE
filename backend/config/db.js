const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const MONGODB_URI = 'mongodb://127.0.0.1:27017/mathzonlinez';
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    // // made separate cuz version errorr
    // mongoose.set('useCreateIndex', true);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
  }
};

module.exports = {
  connectDB, 
  disconnectDB, 
  mongoose
};