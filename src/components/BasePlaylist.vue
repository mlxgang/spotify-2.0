<template>
  <div class="playlist">
    <div class="playlist-photo"></div>
    <span class="playlist-name">
      Микс дня #1
    </span>
    <button>
      <!--      <BaseIcon class="playlist-play-icon" name="playlistPlay" />-->
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group 1">
          <circle id="Ellipse 1" cx="20" cy="20" r="20" fill="#1BB953"/>
          <path id="Polygon 1" d="M28 20L16 26.9282L16 13.0718L28 20Z" fill="white"/>
        </g>
      </svg>
    </button>
  </div>
</template>

<script>
// import BaseIcon from './BaseIcon.vue'

export default {
  name: 'BasePlaylist',
  components: {
    // BaseIcon
  }
}
</script>

<style scoped>
.playlist {
  display: flex;
  align-items: center;

  background-color: #303030;
  height: 80px;
  width: 320px;
  border-radius: 5px;
  transition: background-color .3s;
}

.playlist:hover {
  background-color: #484849;
  transition: background-color .3s;
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

.playlist-play {
  /*background-color: #fbfffe;*/
  fill: #1bb953;
  color: #1bb953;
  height: 40px;
  width: 40px;
}

.playlist-play-icon {
  height: 45px;
  width: 45px;
}
</style>