<template>
  <div class="background">
<!--       :style="{background: 'linear-gradient('+ gradientColor + ' 0%, #121212 20%)'}"-->
    <the-header :headerOpacity="headerOpacity"/>
    <div class="content">
      {{ $route.params.id }}
      <div class="track" v-for="track in likedSongs" :key="track.id">
        <span>{{track.id}}</span>
        <img alt="cover" src="../assets/covers/daily_mix_1.jpg" style="width: 30px; height: 30px">
        <span>{{track.title}}</span>
        <span>{{track.artist}}</span>
        <span>{{track.album}}</span>
        <span>{{track.added}}</span>
        <div v-if="track.explicit === true">explicit</div>
      </div>
    </div>
  </div>


</template>

<script>
import TheHeader from "../components/TheHeader";
import {likedSongs} from "../assets/playlists/liked-songs";

export default {
  name: "ThePlaylist",
  components: {
    TheHeader
  },
  data() {
    return {
      likedSongs,
    }
  },
  props: {
    headerOpacity: {
      type: Number,
      required: true,
    }
  }
}
</script>

<style scoped>
.background {
  display: flex;
  flex-direction: column;
  width: calc(100% - 514px);
  height: 1000px;
  margin-left: 244px;
  /*background-color: #121212;*/
}

.content {
  margin-top: 95px;
}

.track {
  display: grid;
  grid-template-columns: 25px 30px 100px 150px 250px 100px 100px;

  color: white;
  background-color: #121212;
}
</style>