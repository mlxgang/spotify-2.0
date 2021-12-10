<template>
  <div style="display: flex">
    <the-side-menu :currentTab="currentTab" :sideButtons="sideButtons" @changeCurrentTab="changeCurrentTab"/>
    <component :is="currentTab.component"/>
  </div>
</template>

<script>
import TheSideMenu from './components/TheSideMenu.vue'
import TheMainComponent from './components/TheMainComponent.vue'
import TheSearchComponent from './components/TheSearchComponent.vue'
import TheMediaComponent from './components/TheMediaComponent.vue'

const sideButtons = [
  {title: 'Главная', name: 'main', component: 'TheMainComponent'},
  {title: 'Поиск', name: 'search', component: 'TheSearchComponent'},
  {title: 'Моя медиатека', name: 'myMedia', component: 'TheMediaComponent'},
];

export default {
  name: 'App',
  components: {
    TheSideMenu,
    TheMainComponent,
    TheSearchComponent,
    TheMediaComponent,
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
