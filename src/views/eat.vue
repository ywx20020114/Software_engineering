<template>

  <div id="root">
    <div class="title" >
      <eat_image_show></eat_image_show>
      <!--<img src="../assets/title.jpg" width=100% height=400>-->
    </div>
    <div class="food_intro" >
      <br>
      <h1 style="color: red">
        年夜饭
      </h1>
      <h4 style="text-align: left;line-height: 40px;color: crimson">
        &ensp;&ensp;&ensp;&ensp;年夜饭，又称年晚饭、团年饭、团圆饭等，特指年尾除夕（春节前一天）的阖家聚餐。在外工作的人都会在除夕来临之前回老家和家人团聚。中国人的年夜饭是家人的团圆聚餐，这顿是年尾对一家人来说最重要的一顿晚餐。
        年夜饭是每年新年前的重头戏，不但丰富多彩，而且还讲究很多寓意。传统上年夜饭是在除夕祭祖后才食用。吃年夜饭前先拜神祭祖，待拜祭仪式完毕后才开饭等等习俗。而每年的年夜饭中，各个地区都有不同的美食，我们可以点击图片去了解个地方的美食。
      </h4>
      <br><br><br>
    </div>
    <div class="food_view" >
      <div class="food">
        <div class="image">
          <a href="#/eat_video1">
            <img src="../assets/1.jpg" width="184" height="106">
          </a>
        </div>
        <div class="text">
          <p>
            <a href="#/eat_video1">[年年有余]过年吃鱼 <br>祈愿新年“有头有尾</a>
          </p>
        </div>
      </div>
      <div class="food">
        <div class="image">
          <a href="#/eat_video2">
            <img src="../assets/2.jpg" width="184" height="106">
          </a>
        </div>
        <div class="text">
          <p>
            <a href="#/eat_video2">「有滋有味]皮渣隐于民间<br> 其貌不扬味道棒</a>
          </p>
        </div>
      </div>
      <div class="food">
        <div class="image">
          <a href="#/eat_video3">
            <img src="../assets/3.jpg" width="184" height="106">
          </a>
        </div>
        <div class="text">
          <p>
            <a href="#/eat_video3">[更岁饺子]好吃不过饺子<br> 满口鲜汁花样多</a>
          </p>
        </div>
      </div>
      <div class="food">
        <div class="image">
          <a href="#/eat_video4">
            <img src="../assets/4.jpg" width="184" height="106">
          </a>
        </div>
        <div class="text">
          <p>
            <a href="#/eat_video4">[节节高升]年糕味道<br> 甜甜蜜蜜寓意好</a>
          </p>
        </div>
      </div>
    </div>

    <div class="food_view" >
      <div class="food">
        <div class="image">
          <a href="#/eat_video5">
            <img src="../assets/5.jpg" width="184" height="106">
          </a>
        </div>
        <div class="text">
          <p>
            <a href="#/eat_video5">[幸福圆满]客家酿菜<br> 寻味家的味道</a>
          </p>
        </div>
      </div>
      <div class="food">
        <div class="image">
          <a href="#/eat_video6">
            <img src="../assets/6.jpg" width="184" height="106">
          </a>
        </div>
        <div class="text">
          <p>
            <a href="#/eat_video6">[醇香可口]用龙眼酥祭拜大<br> 文豪苏东坡讨个好彩头</a>
          </p>
        </div>
      </div>
      <div class="food">
        <div class="image">
          <a href="#/eat_video7">
            <img src="../assets/7.jpg" width="184" height="106">
          </a>
        </div>
        <div class="text">
          <p>
            <a href="#/eat_video7m">[淳朴本真]白灼鸡腿螺<br> 寻味海南渔家年夜饭</a>
          </p>
        </div>
      </div>
      <div class="food">
        <div class="image">
          <a href="#/eat_video8">
            <img src="../assets/8.jpg" width="184" height="106">
          </a>
        </div>
        <div class="text">
          <p>
            <a href="#/eat_video8">[团团圆圆]河北炸豆腐炸<br>丸子期盼生活美滋滋</a>
          </p>
        </div>
      </div>
    </div>

      <br><br><br>

    <div class="amap" >
      <h2>搜索附近美食</h2>
      <Map ref="map" @updateLocation="updateLocation" />
    </div>



  </div>
</template>

<script>
import Map from '@/components/aliMap.vue'
import eat_image_show from "@/components/eat_image_show";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'eat',
  props:{

  },
  components: {
    eat_image_show,
    Map
  },
  data () {
    return {

    }
  },
  mounted() {
    this.show()

  },
  methods: {
    updateLocation(Addr) {
      console.log('位置信息：', Addr)
    },
    showInfo () {
      alert('点击成功')
    },
    show(){
      function clickEffect() {
        let balls = [];
        let longPressed = false;
        let longPress;
        let multiplier = 0;
        let width, height;
        let origin;
        let normal;
        let ctx;
        const colours = ["#F73859", "#14FFEC", "#00E0FF", "#FF99FE", "#FAF15D"];
        const canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        canvas.setAttribute("style", "width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;");
        const pointer = document.createElement("span");
        pointer.classList.add("pointer");
        document.body.appendChild(pointer);
        if (canvas.getContext && window.addEventListener) {
          ctx = canvas.getContext("2d");
          updateSize();
          window.addEventListener('resize', updateSize, false);
          loop();
          window.addEventListener("mousedown", function(e) {
            pushBalls(randBetween(10, 20), e.clientX, e.clientY);
            document.body.classList.add("is-pressed");
            longPress = setTimeout(function(){
              document.body.classList.add("is-longpress");
              longPressed = true;
            }, 500);
          }, false);
          window.addEventListener("mouseup", function(e) {
            clearInterval(longPress);
            if (longPressed == true) {
              document.body.classList.remove("is-longpress");
              pushBalls(randBetween(50 + Math.ceil(multiplier), 100 + Math.ceil(multiplier)), e.clientX, e.clientY);
              longPressed = false;
            }
            document.body.classList.remove("is-pressed");
          }, false);
          window.addEventListener("mousemove", function(e) {
            let x = e.clientX;
            let y = e.clientY;
            pointer.style.top = y + "px";
            pointer.style.left = x + "px";
          }, false);
        } else {
          console.log("canvas or addEventListener is unsupported!");
        }
        function updateSize() {
          canvas.width = window.innerWidth * 2;
          canvas.height = window.innerHeight * 2;
          canvas.style.width = window.innerWidth + 'px';
          canvas.style.height = window.innerHeight + 'px';
          ctx.scale(2, 2);
          width = (canvas.width = window.innerWidth);
          height = (canvas.height = window.innerHeight);
          origin = {
            x: width / 2,
            y: height / 2
          };
          normal = {
            x: width / 2,
            y: height / 2
          };
        }
        class Ball {
          constructor(x = origin.x, y = origin.y) {
            this.x = x;
            this.y = y;
            this.angle = Math.PI * 2 * Math.random();
            if (longPressed == true) {
              this.multiplier = randBetween(14 + multiplier, 15 + multiplier);
            } else {
              this.multiplier = randBetween(6, 12);
            }
            this.vx = (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle);
            this.vy = (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle);
            this.r = randBetween(8, 12) + 3 * Math.random();
            this.color = colours[Math.floor(Math.random() * colours.length)];
          }
          update() {
            this.x += this.vx - normal.x;
            this.y += this.vy - normal.y;
            normal.x = -2 / window.innerWidth * Math.sin(this.angle);
            normal.y = -2 / window.innerHeight * Math.cos(this.angle);
            this.r -= 0.3;
            this.vx *= 0.9;
            this.vy *= 0.9;
          }
        }
        function pushBalls(count = 1, x = origin.x, y = origin.y) {
          for (let i = 0; i < count; i++) {
            balls.push(new Ball(x, y));
          }
        }
        function randBetween(min, max) {
          return Math.floor(Math.random() * max) + min;
        }
        function loop() {
          ctx.fillStyle = "rgba(255, 255, 255, 0)";
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < balls.length; i++) {
            let b = balls[i];
            if (b.r < 0) continue;
            ctx.fillStyle = b.color;
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
            ctx.fill();
            b.update();
          }
          if (longPressed == true) {
            multiplier += 0.2;
          } else if (!longPressed && multiplier >= 0) {
            multiplier -= 0.4;
          }
          removeBall();
          requestAnimationFrame(loop);
        }
        function removeBall() {
          for (let i = 0; i < balls.length; i++) {
            let b = balls[i];
            if (b.x + b.r < 0 || b.x - b.r > width || b.y + b.r < 0 || b.y - b.r > height || b.r < 0) {
              balls.splice(i, 1);
            }
          }
        }
      }
      clickEffect();//调用特效函数
    }

  }
}

</script>

<style scoped>

#root{
  background-color: white;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  margin: 0;
  padding: 0;

}


.food_view {
  width: 100%;
  display: flex;
  flex-flow: row-reverse;
  justify-content: space-between;
}



.text a {
  color: red;
  font-family: "Microsoft YaHei UI";
  text-decoration-line: none;
}

.amap {
  width: 100%;
  justify-content: center;
}
</style>
