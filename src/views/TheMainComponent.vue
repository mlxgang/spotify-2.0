<template>
  <div :style="{background: 'linear-gradient('+ gradientColor + ' 0%, #121212 20%)' }" class="background">
    <the-header :headerOpacity="headerOpacity" :gradientColor="gradientColor"/>
    <div class="content">
    <span class="current-greetings">
      {{ greeting }}
    </span>
      <div id="last-playlists">
        <base-playlist
            v-for="(playlist, index) in playlists"
            :key="index"
            :index="index"
            :playlist="playlist"
            @setGradientColor="onSetGradientColor"
            @resetGradientColor="onResetGradientColor"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BasePlaylist from '../components/BasePlaylist.vue';
import TheHeader from '../components/TheHeader';
import {playlists} from '../assets/playlists';
import ColorThief from 'colorthief';

const colorThief = new ColorThief();

export default {
  name: 'TheMainComponent',
  components: {
    TheHeader,
    BasePlaylist,
  },
  data() {
    return {
      gradientColorDefault: '',
      gradientColor: 'rgb(33, 18, 96)',
      playlists,
    }
  },
  methods: {
    setGradientColorDefault() {
      let allImgs = document.getElementsByTagName('img')
      this.gradientColorDefault = `rgb(${colorThief.getColor(allImgs[0]).join(' ')})`
    },
    onSetGradientColor(index) {
      let allImgs = document.getElementsByTagName('img')
      this.gradientColor = `rgb(${colorThief.getColor(allImgs[index]).join(' ')})`
    },
    onResetGradientColor() {
      this.gradientColor = this.gradientColorDefault
    }
  },
  mounted() {
    this.setGradientColorDefault();
    this.gradientColor = this.gradientColorDefault
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
  },
  props: {
    headerOpacity: {
      type: Number,
      required: true,
    }
  },
  emits: ['setGradientColor', 'resetGradientColor']
}
</script>

<style scoped>
.background {
  display: flex;
  flex-direction: column;
  width: 100%;
  /*width: calc(100% - 514px);*/
  height: 100%;
  margin-left: 244px;
  /*background: linear-gradient(rgba(33, 18, 96, 100) 0%, #121212 20%);*/
}

.content {
  margin-top: 50px;
  padding-top: 45px;
  height: 1000px;
}

.current-greetings {
  font-size: 28px;
  color: #fff;
  /*margin-top: 45px;*/
  margin-left: 30px;
  margin-right: auto;
}

#last-playlists {
  display: grid;
  /*grid-template-columns: 320px 320px 320px 320px;*/
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 80px 80px;
  gap: 20px;

  margin-top: 25px;
  margin-left: 30px;
  margin-right: 30px;
}
</style>