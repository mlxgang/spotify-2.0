<template>
  <div class="playlist">
    <div class="playlist-photo">
      <slot/>
    </div>
    <div class="playlist-title">
      <span class="playlist-name">
        {{ playlist.name }}
      </span>
      <button class="playlist-play-button">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g><circle cx="20" cy="20" r="20" fill="#1BB953"/><path d="M28 20L16 26.9282L16 13.0718L28 20Z" fill="white"/></g>
      </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasePlaylist',
  components: {},
  props: ['playlist']
}
</script>

<style scoped>
.playlist {
  display: flex;

  background-color: rgba(52, 51, 51, 0.5);
  height: 80px;
  width: 320px;
  border-radius: 5px;
  transition: background-color .3s;
}

.playlist:hover {
  background-color: rgba(94, 94, 95, 0.5);
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
  width: 240px;
}

.playlist-photo {
  height: 80px;
  width: 80px;
  background-color: #ff0b0b;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.playlist-name {
  padding-left: 15px;
  color: #ffffff;
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