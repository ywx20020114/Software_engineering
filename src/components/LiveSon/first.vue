<template>
  <div class="recommendPage">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide><img src="@/assets/tuanyuan4.png" width="100%" height="100%"></swiper-slide>
      <swiper-slide><img src="@/assets/tuanyuan3.png" width="100%" height="100%"></swiper-slide>
      <swiper-slide><img src="@/assets/tuanyuan1.png" width="100%" height="100%"></swiper-slide>
      <swiper-slide><img src="@/assets/tuanyuan2.png" width="100%" height="100%"></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  name:'first',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          color:'black'

        }

      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style  >
.swiper-button-prev, .swiper-button-next{
  background: #2ee;
}

.recommendPage .swiper-container{
  position: relative;
  left: 0;
  display:flex;
  width: 60%;
  height: 500px;
}
.recommendPage{
  justify-content: flex-start;

}

</style>

