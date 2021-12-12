<template>
  <div style="display: flex">
    <the-side-menu/>
    <main-layout/>
    <the-friends-side-menu/>
  </div>
</template>

<script>
import TheSideMenu from './components/TheSideMenu.vue'
import MainLayout from "./views/MainLayout";
import TheFriendsSideMenu from "./components/TheFriendsSideMenu";

export default {
  name: 'App',
  components: {
    TheFriendsSideMenu,
    MainLayout,
    TheSideMenu,
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
</style>
