<template>
  <div class="background">
    <the-header/>
    <div class="content">
    <span class="current-greetings">
      {{ greeting }}
    </span>
      <div id="last-playlists">
        <base-playlist :playlist="{name: 'Любимые песни'}">
          <img src="../assets/liked-songs.png" height="80" width="80">
        </base-playlist>
        <base-playlist v-for="(playlist, index) in playlists" :key="index" :playlist="playlist"/>
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
    BasePlaylist
  },
  data() {
    return {
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

  background: linear-gradient(#211260 0%, #121212 20%);
  margin-left: 244px;
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