<template>
  <div class="container">
    <div class="lunbo" @mouseenter="clear" @mouseleave="run">
      <div class="img">
        <img :src="dataList[currentIndex]" alt="" />
      </div>
      <div class="dooted" v-if="this.dataList.length">
        <ul class="doo">
          <li
              v-for="(item, index) in this.dataList"
              :key="index"
              :class="{ current: currentIndex == index }"
              @click="gotoPage(index)"
          ></li>
        </ul>
      </div>


    </div>

  </div>
</template>

<script>
export default {
  name:"eat_image_show",
  data () {
    return {
      dataList: [
        require('../assets/title1.jpg'),
        require('../assets/title2.jpg'),
        require('../assets/title3.jpg')
      ],
      currentIndex: 0, // 默认显示图片
      timer: null // 定时器
    }
  },
  created () {
    this.run()
  },
  methods: {
    gotoPage (index) {
      this.currentIndex = index
    },
    next () {
      if (this.currentIndex === this.dataList.length - 1) {
        this.currentIndex = 0
      } else {
        this.currentIndex++
      }
    },
    up () {
      if (this.currentIndex === 0) {
        this.currentIndex = this.dataList.length - 1
      } else {
        this.currentIndex--
      }
    },
    clear () {
      clearInterval(this.timer)
    },
    // 定时器
    run () {
      this.timer = setInterval(() => {
        this.next()
      }, 800)
    }
  },
}
</script>

<style lang="less" scoped>
ul li {
  float: left;
  width: 40px;
  height: 80px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  color: rgba(240, 238, 238, 0.8);
  font-size: 60px;
}
.container {
  position: relative;



  .img {

    border: 0px solid gray;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .dooted {
    position: absolute;
    bottom: -10px;
    right: 0px;
  }
}


.current {
  color: gray;
}
</style>

