<template>
  <div id="nav">
    <img src="./assets/speedio-logo.png" alt="speedio" class="speedio-logo">
    <div class="container">
      <div class="card">
        <form action="submit" @submit="login()">
          <input
            class="form-control"
            type="text"
            name="login"
            id="login"
            placeholder="Login"
          />
          <input
            class="form-control"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button class="btn btn-success">Login</button>
        </form>
        <a href="">Criar conta</a>
      </div>
      <div class="url-generator-box">
        <label for="ult-input">Shorten your url</label>
        <input type="text" name="url-input" id="url-input" class="form-control" />
        <button class="btn btn-info" @click="shortenUrl()">Shorten</button>
      </div>
      <div class="urls-box"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    async shortenUrl() {
      try {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v2/cnae/classes/01113')
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.speedio-logo {
  width: 40%;
  min-width: 190px;
  max-width: 390px;
}
.card {
  width: 100%;
  max-width: 500px;
  margin: auto;
  text-align: center;
}
.card form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.card form input {
  margin: 5px;
}
.btn-success {
  width: 150px;
}
.urls-box {
  height: 100%;
  max-height: 500px;
  overflow-y: auto;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid lightblue;
  box-shadow: 10px 10px 10px black;
}
.url-generator-box {
  margin: 20px auto;
  text-align: left;
  width: 100%;
  max-width: 500px;
  position: relative;
  overflow: hidden;
}
.btn-info {
  position: absolute;
  right: 0;
  top: 24px;
}
</style>
