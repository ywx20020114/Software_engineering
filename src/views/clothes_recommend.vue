<template>
  <div>
    <div id="background" style="position: absolute;left: 2px;top: 10px">
      <img src="../assets/background2.webp" style=" width:1260px;height:100%;opacity: 0.5;">
    </div>
    <div class="input" style="position: absolute;left: 400px;top: 10px">
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
  name: "clothes_recommend",
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
    showInfo1(){
      alert('提交成功！')
    }
  }
}
</script>

<style scoped>

</style>