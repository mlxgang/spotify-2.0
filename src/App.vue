<template>
  <div style="display: flex">
    <the-side-menu/>
    <router-view :headerOpacity="headerOpacity"/>
<!--    <the-friends-side-menu/>-->
  </div>
</template>

<script>
import TheSideMenu from './components/TheSideMenu.vue'
// import TheFriendsSideMenu from './components/TheFriendsSideMenu';

export default {
  name: 'App',
  components: {
    // TheFriendsSideMenu,
    TheSideMenu,
  },
  data() {
    return {
      headerOpacity: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.headerOpacity = window.scrollY / 125
    },
  },
}
</script>

<style scoped>
</style>
