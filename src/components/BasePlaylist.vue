<template>
  <router-link :to="`/playlist/${playlist.img}`">
    <div class="playlist" @mouseover="setGradientColor" @mouseleave="resetGradientColor">
      <img :alt="playlist.img" class="playlist-photo" :src="require(`../assets/covers/${playlist.img}.jpg`)">
      <div class="playlist-title">
      <span class="playlist-name">
        {{ playlist.title }}
      </span>
        <button class="playlist-play-button">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <circle cx="20" cy="20" r="20" fill="#1BB953"/>
              <path d="M28 20L16 26.9282L16 13.0718L28 20Z" fill="white"/>
            </g>
          </svg>
        </button>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'BasePlaylist',
  methods: {
    setGradientColor() {
      this.$emit('setGradientColor', this.index)
    },
    resetGradientColor() {
      this.$emit('resetGradientColor')
    }
  },
  props: {
    playlist: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  emits: ['setGradientColor', 'resetGradientColor']
}
</script>

<style scoped>
.playlist {
  display: flex;

  background-color: rgba(52, 51, 51, 0.5);
  height: 80px;
  /*width: 320px;*/
  width: 389px;
  border-radius: 5px;
  transition: background-color .3s;
}

.playlist:hover {
  background-color: rgba(88, 88, 89, 0.5);
  transition: background-color .3s;
}

.playlist:hover > .playlist-title > .playlist-play-button {
  opacity: 1;
  transition: opacity .3s;
}

.playlist-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.playlist-photo {
  height: 80px;
  width: 80px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.playlist-name {
  padding-left: 15px;
  color: #ffffff;
  /*margin-right: auto;*/
}

.playlist-play-button {
  opacity: 0;
  transition: opacity .3s;
  height: 40px;
  width: 40px;
  margin-right: 15px;
  border-radius: 50%;
  box-shadow: 0 10px 8px -4px rgba(0, 0, 0, 0.3);
}
</style>