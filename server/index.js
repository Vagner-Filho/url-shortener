const sequelize = require('./config/database.js')
const bodyParser = require('body-parser')
const urlRoutes = require('./routes/url.js')
const userRoutes = require('./routes/user.js')
const cors = require('cors');
const express = require('express')

const app = express()
// Allow cors
app.use(cors())
app.use(bodyParser.json())
app.use('/url', urlRoutes)
app.use('/user', userRoutes)

const PORT = 5000

app.listen(PORT, async () => {
    console.log(`Server running on localhost:${PORT}`)
    try {
      await sequelize.sync();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
});

// app.listen(PORT, () => {
//   console.log(`Server running on localhost:${PORT}`)
// })