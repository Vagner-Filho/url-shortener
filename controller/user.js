const { v4: uuidv4 } = require('uuid');
let users = [

]
let usersLoggedIn = [

]
const createUser = (request, response) => {
  const newUser = request.body;

  if (newUser.name.length < 3) {
    return response.send('Name too short')
  }
  if (newUser.password.length < 1) {
    return response.send('Password is missing')
  }

  users.push({ ...newUser, id: uuidv4() });

  response.send(`User ${newUser.name} added to the database!`);
}

const logUserIn = (request, response) => {
  const user = request.body

  for (const existingUser of users) {
    if (user.name === existingUser.name && user.password === existingUser.password) {
      usersLoggedIn.push(user)
      return response.send(`Bem vindo, ${user.name}!`)
    }
  }
  response.send('Nome ou senha não encontrados.')
}

const getUsers = (request, response) => {
  response.send({users, usersLoggedIn})
}

module.exports = { createUser, logUserIn, getUsers }