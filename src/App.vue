<template>
  <div style="display: flex">
    <the-side-menu :currentTab="currentTab" :sideButtons="sideButtons" @changeCurrentTab="changeCurrentTab"/>
    <main-layout/>
  </div>
</template>

<script>
import TheSideMenu from './components/TheSideMenu.vue'
import MainLayout from "./views/MainLayout";
const sideButtons = [
  {title: 'Главная', name: 'main', component: 'TheMainComponent'},
  {title: 'Поиск', name: 'search', component: 'TheSearchComponent'},
  {title: 'Моя медиатека', name: 'my-media', component: 'TheMediaComponent'},
];

export default {
  name: 'App',
  components: {
    MainLayout,
    TheSideMenu,
  },
  data() {
    return {
      sideButtons,
      currentTab: sideButtons[0],
    }
  },
  methods: {
    changeCurrentTab(index) {
      this.currentTab = this.sideButtons[index]
    }
  }
}
</script>

<style scoped>
</style>
