<template>
  <div id="nav">
    <img src="./assets/speedio-logo.png" alt="speedio" class="speedio-logo" />
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
        <input
          type="text"
          name="url-input"
          id="url-input"
          class="form-control"
          v-model="url"
        />
        <div class="shorter-input">
          <input type="text" name="shorter" id="shorter" disabled>
          <button class="btn btn-copy" @click="goToUrl(shorterUrl)">Go To</button>
        </div>
        <button class="btn btn-info" @click="shortenUrl()">Shorten</button>
      </div>
      <div class="urls-box mt-5"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      url: "",
      shorterUrl: "",
    };
  },
  methods: {
    async shortenUrl() {
      try {
        const payload = { url: this.url };
        const response = await axios.post("http://localhost:5000/url", payload);
        if (response.data.status === 200) {
          this.shorterUrl = response.data.shortened;
          const shorterInput = document.querySelector('#shorter')
          shorterInput.value = this.shorterUrl
          document.querySelector('.shorter-input').style.height = '38px'
        }
      } catch (error) {
        console.error(error);
      }
    },
    async goToUrl(value) {
      try {
        const payload = { shorterUrl: value }
        const response = await axios.post('http://localhost:5000/url/urls', payload)
        console.log(response)
      } catch (error) {
        console.error(error)
      }
      location.assign(value)
    }
  },
};
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
#shorter {
  padding: 0.375rem 0.75rem;
  width: 100%;
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
.shorter-input {
  height: 0px;
  transition: height 750ms linear;
}
.btn-copy {
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: lightgreen !important;
}
</style>
