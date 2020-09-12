<template>
  <nav v-if="toggle" class="col-12">
    <div class="d-flex justify-content-end">
      <span class="p-2">
        <router-link to="/">HOME</router-link>
      </span>
      <span class="p-2">
        <router-link to="/about">ABOUT</router-link>
      </span>
      <span class="p-2">
        <router-link to="/services">SERVICES</router-link>
      </span>
      <span class="p-2">
        <router-link to="/portfolio">PORTFOLIO</router-link>
      </span>
      <span class="p-2">
        <router-link to="/contactus">CONTACT US</router-link>
      </span>
    </div>
  </nav>
  <nav v-else class="col-12">
    <div v-if="navDropDown" class="dropDownMenu bg-light">
      <div>
        <span @click="toggleNavDropDown" class="dropDownMenuButton action">
          <i class="fa fa-bars"></i>
        </span>
      </div>
      <div class="p-2">
        <router-link to="/">HOME</router-link>
      </div>
      <div class="p-2">
        <router-link to="/about">ABOUT</router-link>
      </div>
      <div class="p-2">
        <router-link to="/services">SERVICES</router-link>
      </div>
      <div class="p-2">
        <router-link to="/portfolio">PORTFOLIO</router-link>
      </div>
      <div class="p-2">
        <router-link to="/contactus">CONTACT US</router-link>
      </div>
    </div>
    <span
      v-else
      @click="toggleNavDropDown"
      class="dropDownMenuButton action bg-dark text-light p-2"
    >
      <h5>
        <!-- <i class="fa fa-bars"></i> -->
        MENU
      </h5>
    </span>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
      navDropDown: false,
    };
  },
  methods: {
    toggleToggle() {
      this.toggle = !this.toggle;
    },
    toggleNavDropDown() {
      this.navDropDown = !this.navDropDown;
    },
  },
};
</script>

<style>
.dropDownMenu {
  z-index: 2;
  top: 2rem;
  right: 2rem;
  width: 20vw;
  transition: 0.3s;
  position: fixed;
}
.dropDownMenuButton {
  z-index: 2;
  top: 0.5rem;
  right: 0.8rem;
  transition: 0.3s;
  position: fixed;
}
.action {
  cursor: pointer;
}
</style>