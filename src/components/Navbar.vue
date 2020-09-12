<template>
  <div class="col-12 justify-content-end">
    <div class="row">
      <nav class="col-12 d-none d-lg-flex p-2 justify-content-end">
        <span class="p-2">
          <router-link class="p-1 active-link" to="/">HOME</router-link>
        </span>
        <span class="p-2">
          <router-link class="p-1 routeLink" to="/about">ABOUT</router-link>
        </span>
        <span class="p-2">
          <router-link class="p-1 routeLink" to="/services"
            >SERVICES</router-link
          >
        </span>
        <span class="p-2">
          <router-link class="p-1 routeLink" to="/portfolio"
            >PORTFOLIO</router-link
          >
        </span>
        <span class="p-2">
          <router-link class="p-1 routeLink" to="/contactus"
            >CONTACT US</router-link
          >
        </span>
      </nav>
    </div>
    <div class="row">
      <nav class="col-12 d-lg-none">
        <!-- //v-bind:class="{active:'slide-in ', animate:' slide-in-reverse' }" -->
        <div
          v-if="navDropDown"
          id="dropDownMenu"
          v-bind:class="
            navDropDownAnimToggle
              ? 'slide-in dropDownMenu bg-light'
              : 'slide-out dropDownMenu bg-light'
          "
        >
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
            <router-link class="p-1 routeLink" to="/">HOME</router-link>
          </div>
          <div class="p-2">
            <router-link class="p-1 routeLink" to="/about">ABOUT</router-link>
          </div>
          <div class="p-2">
            <router-link class="p-1 routeLink" to="/services"
              >SERVICES</router-link
            >
          </div>
          <div class="p-2">
            <router-link class="p-1 routeLink" to="/portfolio"
              >PORTFOLIO</router-link
            >
          </div>
          <div class="p-2">
            <router-link class="routeLink" to="/contactus"
              >CONTACT US</router-link
            >
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
      navDropDownAnimToggle: false,
    };
  },
  methods: {
    toggleNavDropDown() {
      this.navDropDownAnimToggle = !this.navDropDownAnimToggle;
      this.navDropDown
        ? setTimeout(() => {
            this.navDropDown = !this.navDropDown;
          }, 650)
        : (this.navDropDown = !this.navDropDown);
    },
    linkClick() {},
  },
};
</script>

<style>
.dropDownMenu {
  z-index: 2;
  top: 3rem;
  right: 0rem;
  width: 8rem;

  position: fixed;
}
.dropDownMenuButton {
  z-index: 2;
  top: 0rem;
  right: 0rem;
  width: 8rem;

  position: fixed;
}
.action {
  cursor: pointer;
}
.slide-in {
  animation-name: slide-in-vertical;
  animation-iteration-count: 1;
  animation-duration: 0.4s;
}
.slide-out {
  animation-name: slide-out-vertical;
  animation-iteration-count: 1;
  animation-duration: 0.8s;
  animation-direction: reverse;
}
.routeLink {
  transition: 0.3s;
  border-bottom: solid 0.1px rgba(255, 255, 255, 0);
  border-bottom-color: rgb(238, 113, 64);
  opacity: 0.8;
}
.routeLink:hover {
  transition: 0.3s;
  border-bottom: solid 6px rgb(238, 113, 64);
  padding-top: 4px;
  padding-bottom: 4px;
  opacity: 1;
}
.active-link {
  transition: 0.3s;
  border-bottom: none;
  background: rgb(238, 113, 64);
  color: rgb(255, 255, 255);
}
.active-link:hover {
  transition: 0.3s;
  background: none;
  border: none;
  border-bottom: solid 6px rgb(238, 113, 64);
  padding-top: 4px;
  padding-bottom: 4px;
}

@keyframes slide-in-vertical {
  0% {
    top: -15rem;
  }
  100% {
    top: 3rem;
  }
}
@keyframes slide-out-vertical {
  0% {
    top: -15rem;
  }
  100% {
    top: 3rem;
  }
}
</style>
