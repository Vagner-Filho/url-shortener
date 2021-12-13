<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <div class="container">
      <div class="card">
        <form action="submit">
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
        <input type="text" name="url-input" id="url-input" />
      </div>
      <div class="urls-box"></div>
    </div>
  </div>
  <router-view />
</template>

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
.card {
  width: 100%;
  max-width: 500px;
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
</style>
