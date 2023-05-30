<template>
  <div>
    <div class="title_img" style="position: absolute;left: 2px;top: 0">
      <img src="../assets/title_img2.jpg" width="1260px" height="500px">
    </div>
    <div class="title" style="position: absolute;left: 330px;top: 10px">
      <h1>这里是衣界面</h1>
      <h2>主要介绍中国春节与穿衣有关的传统习俗</h2>
      <button @click="word_intro" style="position: absolute;left: 40px;top: 150px;width: 100px;height: 40px;">文字资料介绍</button>
      <button @click="video_intro" style="position: absolute;left: 180px;top: 150px;width: 100px;height: 40px;">视频资料介绍</button>
      <button @click="img_show" style="position: absolute;left: 320px;top: 150px;width: 100px;height: 40px;">图片展示</button>
      <button @click="recommend" style="position: absolute;left: 460px;top: 150px;width: 100px;height: 40px;">向您推荐服装</button>
    </div>

    <div id="background" style="position: absolute;left: 2px;top: 510px">
      <img src="../assets/background2.webp" style=" width:1260px;height:100%;opacity: 0.5;">
    </div>

    <div class="introduction" style="position: absolute;left: 2px;top: 510px">
      <h3>春节衣着喜大红色尤其是儿童，着大红色衣服寓意吉祥如意，来年的生活红红火火。</h3>
      <hr>
      <h3>
        春节一定要穿新衣服，过年穿新衣是我国人民的古老习俗。
        在宋朝，《东京梦华录》中也有记载，
        宋朝这个朝代很有意思，是市民之风非常繁盛，每到新年这一天，大家都穿得干干净净的，到处去逛。
        所以这个新衣几乎成了春节的品牌。一过新年，大家都穿新衣。
      </h3>
      <hr>
      <h3>
        在中国的传统中，过新年穿新衣的历史由来已久，
        它和舞龙、舞狮、敲锣打鼓、贴春联、放鞭炮、挂灯笼一样，是节日喜庆中不可缺少的部分，
        多姿多彩的春节新衣，把节日的气氛烘托得更加浓烈、更加美好。</h3>
      <hr>
      <a :href="url">点击链接观看视频介绍</a>
    </div>

    <div class="input" style="position: absolute;left: 2px;top: 820px">
      <h2>输入您的基本信息获取相关服饰推荐</h2>
      输入您的性别: <input type="text" v-bind:value="gender"><br/>
      输入您的年龄: <input type="text" v-model:value="age"><br/>
      <button @click="showInfo1">确认提交信息</button>
      <!-- v-model只适用于表单 -->
    </div>

  </div>
</template>

<script>
export default {
  name: "clothes",
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
  methods:{
    word_intro(){
      this.$router.push("/clothes_word_intro");
    },
    video_intro(){
      this.$router.push("/clothes_video_intro");
    },
    img_show(){
      this.$router.push("/clothes_img_show");
    },
    recommend(){
      this.$router.push("/clothes_recommend");
    },
    showInfo1(){
      alert('提交成功！')
    },
    showInfo2(number, a){
      console.log(a)
      console.log(number)
      alert('同学你好!!')
    }
  }
}
</script>

<style scoped>
  .title{
    width: 600px;
    height: 120px;
  }
  .introduction{
    width: 1260px;
    height: 100px;
  }
  .input{
    width: 1260px;
    height: 150px;
  }
</style>