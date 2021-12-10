<template>
  <div class="background">
    <the-header>
      <div class="button-box">
        <button
            v-for="(tab, index) in tabs"
            :key="index"
            :class="['button-media-tab', { active: currentTab === tab }]"
            @click="changeCurrentTab(index)"
        >
          {{ tab.name }}
        </button>
      </div>
    </the-header>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader';

const tabs = [
  {name: 'Плейлисты', component: ''},
  {name: 'Подкасты', component: ''},
  {name: 'Исполнители', component: ''},
  {name: 'Альбомы', component: ''},
]

export default {
  name: 'TheMediaComponent',
  components: {
    TheHeader
  },
  data() {
    return {
      tabs,
      currentTab: tabs[0]
    }
  },
  methods: {
    changeCurrentTab(index) {
      this.currentTab = tabs[index]
    }
  }
}
</script>

<style scoped>
.background {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1000px;
  background-color: #121212;
}

.button-box {
  margin-left: 14px;
}

.button-media-tab {
  width: auto;
  padding: 10px 15px;
  margin-left: 14px;
  font-size: 14px;
  border-radius: 3px;
  color: #b3b3b3;
  transition: color .3s;
}

.button-media-tab:hover {
  color: #f5f5f5;
  transition: color .3s;
}

.active {
  background-color: #333434;
  color: #f5f5f5;
}

</style>