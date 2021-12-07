const sequelize = require('./config/database.js')
const User = require('./model/user.js')
const urlRoutes = require('./routes/url.js')
const express = require('express')

const app = express()
app.use('/url', urlRoutes)
const PORT = 5000

app.listen(PORT, async () => {
    console.log(`Server running on localhost:${PORT}`)
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
});

// app.listen(PORT, () => {
//   console.log(`Server running on localhost:${PORT}`)
// })