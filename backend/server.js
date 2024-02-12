const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require('cors');
const { errorHandler } = require('./middleware/errorMiddleware')
const { connectDB } = require('./config/db') 
const port = process.env.PORT || 5000 

//MongoDB Compass routees
const fifthgradeRoutes = require('./routes/fifthgradeRoutes');
const firstgradeRoutes = require('./routes/firstgradeRoutes');
const fourthgradeRoutes = require('./routes/fourthgradeRoutes');
const kindergartenRoutes = require('./routes/kindergartenRoutes');
const secondgradeRoutes = require('./routes/secondgradeRoutes');
const thirdgradeRoutes = require('./routes/thirdgradeRoutes');
const studentRoutes = require('./routes/studentRoutes');
const loginRoutes = require('./routes/loginRoutes');

async function startServer() {
    try {
      await connectDB(); 


      const app = express(); 

      app.use(cors());
  
      app.use(express.json());
      app.use(express.urlencoded({ extended: false }));
  
      // Set up your routes
      app.use('/api', loginRoutes);
      app.use('/api', fifthgradeRoutes);
      app.use('/api', firstgradeRoutes);
      app.use('/api', fourthgradeRoutes);
      app.use('/api', kindergartenRoutes);
      app.use('/api', secondgradeRoutes);
      app.use('/api', thirdgradeRoutes);
      app.use('/api', studentRoutes);
  
      app.use(errorHandler);
  
      app.listen(port, () => console.log(`Server started on port ${port}`));
    } catch (error) {
      console.error('Error starting the server:', error);
    }
  }
  
  startServer();