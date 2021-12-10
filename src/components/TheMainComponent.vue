<template>
  <div class="background">
    <div class="control-buttons">
      <button>
        <BaseIcon class="arrow-icon" name="arrowLeft"/>
      </button>
      <button disabled>
        <BaseIcon class="arrow-icon disabled" name="arrowRight"/>
      </button>
    </div>
    <div>
      <div class="current-greetings">
        {{ greeting }}
      </div>
      <div id="last-playlists">
        <BasePlaylist v-for="(playlist, index) in playlists" :key="index" :playlist="playlist"/>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
import BasePlaylist from './BasePlaylist.vue';

export default {
  name: 'TheMainComponent',
  components: {
    BaseIcon,
    BasePlaylist
  },
  data() {
    return {
      playlists: [
        {name: 'Микс дня #1'},
        {name: 'Микс дня #2'},
        {name: 'Микс дня #3'},
        {name: 'Микс дня #4'},
        {name: 'Liked Songs'},
        {name: 'Топ-50 (Россия)'},
        {name: 'Bandana 1'},
        {name: 'Микс дня #5'},
      ]
    }
  },
  computed: {
    greeting() {
      let date = new Date;
      let hour = date.getHours();
      return(hour < 3) ? 'Доброй ночи' :
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
  height: 1000px;
  background: linear-gradient(#20125d 0%, #121212 35%);
}

.control-buttons {
  display: grid;
  grid-template-columns: 25px 25px;
  gap: 20px;
  padding-top: 15px;
  padding-left: 30px;
}

.arrow-icon {
  width: 22px;
  height: 22px;
  padding: 5px;
  color: #fff;
  background: #000;
  border-radius: 50%;
}

.disabled {
  color: #a1a1a1;
  background: #151515;
  cursor: not-allowed;
}

.current-greetings {
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  padding-top: 45px;
  padding-left: 30px;
}

#last-playlists {
  display: grid;
  grid-template-columns: 320px 320px 320px 320px;
  grid-template-rows: 80px 80px;
  gap: 20px;

  padding-top: 25px;
  padding-left: 30px;
}
</style>