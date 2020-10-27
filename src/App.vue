<script>
import Main from "./views/Main/Main";
import Navbar from "./components/Navbar/NavbarMain";

export default {
  name: "App",
  components: {
    Main,
    Navbar,
  },
};
</script>

<template>
  <Navbar />
  <Main />
</template>

<style>
#app {
  height: 100%;
}
</style>
