<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.dispatch("loadCatalog");
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: Lato, sans-serif;
}
</style>
