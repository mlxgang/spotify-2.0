<template>
  <div class="background">
    <the-header/>
    <span class="current-greetings">
      {{ greeting }}
    </span>
    <div id="last-playlists">
      <base-playlist :playlist="{name: 'Любимые песни'}">
        <img src="../assets/liked-songs.png">
      </base-playlist>
      <base-playlist v-for="(playlist, index) in playlists" :key="index" :playlist="playlist"/>
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
  width: 100%;
  height: 970px;
  background: linear-gradient(#211260 0%, #121212 35%);
}

.current-greetings {
  font-size: 28px;
  color: #fff;
  margin-top: 45px;
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