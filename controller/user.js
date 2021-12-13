const { v4: uuidv4 } = require('uuid');
const User = require('../model/User.js')
let usersLoggedIn = [

]
const createUser = async (request, response) => {
  const newUser = request.body;

  if (newUser.name.length < 3) {
    return response.send('Name too short')
  }
  if (newUser.password.length < 1) {
    return response.send('Password is missing')
  }

  const newId = uuidv4()

  try {
    const user = await User.create({ userId:newId, ...newUser })
    const res = {
      message: `${user.name} cadastrado com sucesso!`
    }
    response.send(res)
  } catch (error) {
    response.send({ error })
  }
}

const logUserIn = async (request, response) => {
  const user = request.body

  for (const existingUser of users) {
    if (user.name === existingUser.name && user.password === existingUser.password) {
      usersLoggedIn.push(user)
      return response.send(`Bem vindo, ${user.name}!`)
    }
  }
  response.send('Nome ou senha não encontrados.')
}

const getUsers = async (request, response) => {
  const users = await User.findAll()
  response.send(users)
}

module.exports = { createUser, logUserIn, getUsers }