<template>
  <div style="display: flex">
    <the-side-menu/>
    <main-layout/>
  </div>
</template>

<script>
import TheSideMenu from './components/TheSideMenu.vue'
import MainLayout from "./views/MainLayout";

export default {
  name: 'App',
  components: {
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
