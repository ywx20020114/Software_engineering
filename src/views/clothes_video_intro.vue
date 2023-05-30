<template>
  <div>
    <div id="background" style="position: absolute;left: 2px;top: 10px">
      <img src="../assets/background2.webp" style=" width:1260px;height:100%;opacity: 0.5;">
    </div>
    <div id="introduction" style="position: absolute;left: 2px;top: 10px">
      <a :href="url">点击链接观看视频介绍</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "clothes_video_intro",
  data(){
    return{
      name:"ywl",
      gender:'男',
      age:'18',
      url:"https://3g.163.com/v/video/VJU7DSVU2.html",
      school:{
        name:'尚硅谷'
      }
    }
  },
}
</script>

<style scoped>

</style>