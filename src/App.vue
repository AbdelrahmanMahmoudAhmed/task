<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
  background-image: linear-gradient(to bottom, $secondary, #eee);
}
// selection color
::selection {
  background-color: #61e7da85;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(54, 54, 54);
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  padding: 0;
  margin: 0;
  color: #fff;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}

h3 {
  font-size: 55px;
  @media (max-width: 578px) {
    font-size: 32px;
  }
}

.container {
  width: 90%;
  margin: 0 auto;
  @media (max-width: 992px) {
    width: 96%;
  }
}
</style>
