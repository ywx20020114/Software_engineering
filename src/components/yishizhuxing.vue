<template>
  <div id="root" >
    <el-carousel :interval="4000" type="card" height="480px"  >
      <el-carousel-item key="1">
        <el-button class="btn one" @click="clothes">衣</el-button>
      </el-carousel-item>
      <el-carousel-item key="1">
        <el-button class="btn one" @click="eat">食</el-button>
      </el-carousel-item>
      <el-carousel-item key="1">
        <el-button class="btn one" @click="live">住</el-button>
      </el-carousel-item>
      <el-carousel-item key="1">
        <el-button class="btn one" @click="behavior">行</el-button>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
#root{
  padding-top: 80px;
  background-color: black;
  padding-bottom: 80px;
}



.btn {
  border: 1px solid;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 14px;
  padding: 10px 20px;
  font-weight: 300;
}

.one {
  color: #4cc9f0;
}


.btn:hover {
  color: white;
  border: 0;
}

.one:hover {
  background-color: #4cc9f0;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
  box-shadow: 10px 10px 99px 6px rgba(76,201,240,1);
}



button {
  border: 0;
  background: none;
  text-transform: uppercase;
  color: #4361ee;
  font-weight: bold;
  position: relative;
  outline: none;
  padding: 10px 20px;
  box-sizing: border-box;
}

button::before, button::after {
  box-sizing: inherit;
  position: absolute;
  content: '';
  border: 2px solid transparent;
  width: 0;
  height: 0;
}

button::after {
  bottom: 0;
  right: 0;
}

button::before {
  top: 0;
  left: 0;
}

button:hover::before, button:hover::after {
  width: 100%;
  height: 100%;
}

button:hover::before {
  border-top-color: #4361ee;
  border-right-color: #4361ee;
  transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
}

button:hover::after {
  border-bottom-color: #4361ee;
  border-left-color: #4361ee;
  transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s, height 0.3s ease-out 1s;
}


.el-carousel__item button {
  color: orangered;
  font-size: 30px;
  opacity: 0.75;
  width: 100px;
  height: 60px;
  margin: 200px;
}

.el-carousel__item:nth-child(3) {
  background-image: url("../assets/yi.jpg");
}
.el-carousel__item:nth-child(4) {
  background-image: url("../assets/shi.jpg");
}
.el-carousel__item:nth-child(5) {
  background-image: url("../assets/zhu.jpg");
}
.el-carousel__item:nth-child(6) {
  background-image: url("../assets/xing.jpg");
}

</style>

<script>
export default {
  name: "yishizhuxing",
  methods: {
    clothes() {
      this.$router.push("/clothes")
    },
    eat() {
      this.$router.push("/eat")
    },
    live() {
      this.$router.push("/live")
    },
    behavior() {
      this.$router.push("/behavior")
    },
  }
}
</script>

<style scoped>

</style>
