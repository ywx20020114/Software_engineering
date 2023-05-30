<template>
  <div class = 'living' vlaue="四种传统习俗的视频展示">
    <div ref='con2' class="livingSon">
      <button v-show ="button2Show" @click="button2">春联</button>
      <img src="@/assets/chunlian.jpeg" v-show ='!button2Show' style="width:100%;height:100%;opacity:0.9">
    </div>
    <div ref='con3' class="livingSon">
      <button v-show ="button3Show" @click="button3">年画</button>
      <img src="@/assets/nianhua.jpeg" v-show ='!button3Show' style="width:100%;height:100%;opacity:0.9">
    </div>
    <div ref = 'con4' class="livingSon">
      <button  v-show ="button4Show" @click="button4">窗花</button>
      <img src="@/assets/chuanhua.jpeg" v-show ='!button4Show' style="width:100%;height:100%;opacity:0.9">
    </div>
    <div ref ='con5' class="livingSon">
      <button v-show ="button5Show" @click="button5">福字</button>
      <img src="@/assets/fuzi.jpeg" v-show ='!button5Show' style="width:100%;height:100%;opacity:0.9">
    </div>
  </div>
</template>

<script>

export default {
  name: "liveCultureShow",
  data() {
    return {
      button1Show: true,
      button2Show: true,
      button3Show: true,
      button4Show: true,
      button5Show: true
    }
  },
  methods:{
    button2(){
      this.$refs.con2.style.width ='64%'
      this.$refs.con3.style.width ='12%'
      this.$refs.con4.style.width ='12%'
      this.$refs.con5.style.width ='12%'
      this.button2Show= false
      this.button5Show=true
      this.button4Show=true
      this.button3Show=true

    },
    button3(){
      this.$refs.con3.style.width ='64%'
      this.$refs.con2.style.width ='12%'
      this.$refs.con4.style.width ='12%'
      this.$refs.con5.style.width ='12%'
      this.button3Show= false
      this.button5Show=true
      this.button4Show=true
      this.button2Show=true
    },
    button4(){
      this.$refs.con4.style.width ='64%'
      this.$refs.con2.style.width ='12%'
      this.$refs.con3.style.width ='12%'
      this.$refs.con5.style.width ='12%'
      this.button4Show= false
      this.button5Show=true
      this.button2Show=true
      this.button3Show=true
    },
    button5(){
      this.$refs.con5.style.width ='64%'
      this.$refs.con2.style.width ='12%'
      this.$refs.con4.style.width ='12%'
      this.$refs.con3.style.width ='12%'
      this.button5Show= false
      this.button4Show=true
      this.button2Show=true
      this.button3Show=true

    },

  }
}
</script>

<style scoped>
.living{
  display:flex

}
.living{
  align-items: stretch;
  flex-direction: row;
  width: 100%;
  background-color:#332324;
  height: 400px;
  justify-content: center;
}
.livingSon {
  width:25%;
  margin: 0;
  background-color: rgb(225,23,32);
  transition: 2s;
}
</style>