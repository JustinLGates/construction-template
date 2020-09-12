<template>
  <div id="app container bg-light">
    <!-- <Navbar /> -->
    <div class="col-12 col-md-10 col-xl-8 m-auto">
      <div class="row">
        <Header />
        <router-view class="selected-view" />
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
// import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    // Navbar,
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
@import "./assets/_variables.scss";
@import "bootstrap";
@import "./assets/_overrides.scss";
</style>
<style>
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
a {
  /* color: rgb(246, 132, 79) !important; */
  text-decoration: none;
}
a:hover {
  text-decoration: none;
  transition: 0.3s;
  color: rgb(53, 53, 53) !important;
}
.selected-view {
  flex-grow: 1;
}
</style>
