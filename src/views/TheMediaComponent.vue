<template>
  <div class="background">
    <the-header>
      <div class="button-box">
        <router-link to="/my-media/playlists" class="button-media-tab" active-class="active">
          <span>Плейлисты</span>
        </router-link>
        <router-link to="/my-media/podcasts" class="button-media-tab" active-class="active">
          <span>Подкасты</span>
        </router-link>
        <router-link to="/my-media/songwriters" class="button-media-tab" active-class="active">
          <span>Исполнители</span>
        </router-link>
        <router-link to="/my-media/albums" class="button-media-tab" active-class="active">
          <span>Альбомы</span>
        </router-link>
      </div>
    </the-header>
    <router-view/>
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
  methods: {}
}
</script>

<style scoped>
.background {
  display: flex;
  flex-direction: column;
  width: calc(100% - 514px);
  height: 1000px;
  margin-left: 244px;

  background-color: #121212;
}

.button-box {
  /*margin-top: 10px;*/
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
  text-decoration: none;
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