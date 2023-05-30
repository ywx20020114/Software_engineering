<template>
  <div id="bainianshiping">
    <div class="video-content">
      <player-video :src="src"></player-video>
    </div>
  </div>
</template>
<script>
import PlayerVideo from "../components/VideoPlayer";
export default {
  name: "behav_bainian",
  components: {
    PlayerVideo,
  },
  data() {
    return {
      src:require( "../assets/test.mp4"),
    };
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .video-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
</style>
