<template>
  <div class="col-12 justify-content-end">
    <div class="row">
      <nav class="col-12 d-none d-lg-flex p-2 justify-content-end">
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
      </nav>
    </div>
    <div class="row">
      <nav class="col-12 d-lg-none">
        <div v-if="navDropDown" class="dropDownMenu bg-light slide-in">
          <div>
            <span
              @click="toggleNavDropDown"
              class="dropDownMenuButton action bg-dark text-light p-2"
            >
              <h5>
                <i class="fas fa-arrow-circle-up"></i>
                MENU
              </h5>
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
            <i class="fas fa-arrow-circle-down"></i>
            MENU
          </h5>
        </span>
      </nav>
    </div>
  </div>
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
  top: 3rem;
  right: 0rem;
  width: 8rem;
  /* transition: 0.3s; */
  position: fixed;
}
.dropDownMenuButton {
  z-index: 2;
  top: 0rem;
  right: 0rem;
  width: 8rem;
  /* transition: 0.3s; */
  position: fixed;
}
.action {
  cursor: pointer;
}
.slide-in {
  animation-name: slide-vertical;
  animation-iteration-count: 1;
  animation-duration: 0.4s;
}
@keyframes slide-vertical {
  0% {
    top: -5rem;
  }
  100% {
    top: 3rem;
  }
}
</style>