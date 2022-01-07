<template>
  <div id="nav">
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
          <input type="text" name="shorter" id="shorter" disabled />
          <button class="btn btn-copy" @click="goToUrl(shorterUrl)">
            Go To
          </button>
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
          const shorterInput = document.querySelector("#shorter");
          shorterInput.value = this.shorterUrl;
          document.querySelector(".shorter-input").style.height = "38px";
        }
      } catch (error) {
        console.error(error);
      }
    },
    async goToUrl(value) {
      try {
        const payload = { shorterUrl: value };
        const response = await axios.post(
          "http://localhost:5000/url/urls",
          payload
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
      location.assign(value);
    },
  },
};
</script>

<style>
body {
  /* Linear gradient que divide o background em duas cores, o branco ocupa 40 % e o cinza começa em 40% e ocupa o restante */
  background: linear-gradient(to bottom, #fff 40%, var(--gray-bg) 40% 60%)
    no-repeat no-repeat center;
  height: 100vh;
}
</style>
