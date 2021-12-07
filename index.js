import { sequelize } from './config/database.js'
import { User } from './model/user.js'
import express from 'express'

const app = express()

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`)
})

try {
    const response = await sequelize.sync()
    // console.log(response)
    const create = await User.create({
        email: 'vagner.filhopro@gmail.com',
        password: '123456',
        name: 'Vagner'
    })
} catch (error) {
    console.log(error)
}