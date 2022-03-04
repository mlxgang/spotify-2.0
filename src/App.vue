<template>
  <div style="display: flex">
    <the-side-menu/>
    <router-view/>
    <the-friends-side-menu/>
  </div>
</template>

<script>
import TheSideMenu from './components/TheSideMenu.vue'
import TheFriendsSideMenu from "./components/TheFriendsSideMenu";

export default {
  name: 'App',
  components: {
    TheFriendsSideMenu,
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
