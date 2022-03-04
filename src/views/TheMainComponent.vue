<template>
  <div :style="{background: 'linear-gradient(' + gradientColor + '100) 0%, #121212 20%)'}" class="background">
    <the-header :headerOpacity="headerOpacity" :gradientColor="gradientColor"/>
    <div class="content">
    <span class="current-greetings">
      {{ greeting }}
    </span>
      <div id="last-playlists">
        <base-playlist :playlist="{name: 'Любимые песни'}" @mouseover="this.gradientColor = 'rgba(33, 18, 96, '">
          <img height="80" src="../assets/liked-songs.png" width="80">
        </base-playlist>
        <base-playlist v-for="(playlist, index) in playlists" :key="index" :playlist="playlist" @mouseover="this.gradientColor = 'rgba(255, 11, 11, '" />
      </div>
    </div>
  </div>
</template>

<script>
import BasePlaylist from '../components/BasePlaylist.vue';
import TheHeader from '../components/TheHeader';

export default {
  name: 'TheMainComponent',
  components: {
    TheHeader,
    BasePlaylist,
  },
  data() {
    return {
      currentScroll: 0,
      headerOpacity: 0,
      gradientColor: 'rgba(33, 18, 96, ',
      playlists: [
        {name: 'Микс дня #1'},
        {name: 'Микс дня #2'},
        {name: 'Микс дня #3'},
        {name: 'Микс дня #4'},
        {name: 'Микс дня #5'},
        {name: 'Топ-50 (Россия)'},
        {name: 'Bandana 1'},
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.currentScroll = window.pageYOffset
      this.headerOpacity = this.currentScroll / 125
    }
  },
  computed: {
    greeting() {
      let date = new Date;
      let hour = date.getHours();
      return (hour < 4) ? 'Доброй ночи' :
          (hour < 12) ? 'Доброе утро' :
              (hour < 16) ? 'Добрый день' :
                  (hour < 22) ? 'Добрый вечер' :
                      (hour < 24) ? 'Доброй ночи' : 'ау?'
    }
  }
}
</script>

<style scoped>
.background {
  display: flex;
  flex-direction: column;
  width: calc(100% - 514px);
  height: 100%;
  margin-left: 244px;

  /*background: linear-gradient(rgba(33, 18, 96, 100) 0%, #121212 20%);*/
}

.content {
  margin-top: 50px;
  padding-top: 45px;
  height: 1000px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}

/*.content::-webkit-scrollbar {*/
/*  width: 12px;*/
/*  background: none;*/
/*}*/

/*.content::-webkit-scrollbar-thumb {*/
/*  color: rgba(255, 255, 255, 0.3);*/
/*}*/

/*.background::-webkit-scrollbar {*/
/*  display: block;*/
/*}*/

.current-greetings {
  font-size: 28px;
  color: #fff;
  /*margin-top: 45px;*/
  margin-left: 30px;
  margin-right: auto;
}

#last-playlists {
  display: grid;
  grid-template-columns: 320px 320px 320px 320px;
  grid-template-rows: 80px 80px;
  gap: 20px;

  margin-top: 25px;
  margin-left: 30px;
}
</style>