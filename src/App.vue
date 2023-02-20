<template >
  <div class="wrap pb-10">
    <main-nav-bar></main-nav-bar>
    <scroll-to-top-component></scroll-to-top-component>
    <RouterView />
    <footer-component></footer-component>

  </div>

</template>

<style lang="scss">
@import "./assets/all.scss";
</style>

<script>
import { RouterLink, RouterView } from 'vue-router'
import MainNavBar from './components/MainNavBar.vue'
import ScrollToTopComponent from './components/ScrollToTopComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
export default {
  data() {
    return {
      navBarisOpen: false,

    }
  },
  components: {
    ScrollToTopComponent,
    MainNavBar,
    FooterComponent,

  },

  methods: {
    clickNavBar() {
      this.navBarisOpen = true
    },
    closeNavBar() {
      this.navBarisOpen = false
    }
  },
}
</script>