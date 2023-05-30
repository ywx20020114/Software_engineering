<template>

<!--  这个组件用于首页的滑动展示当中的春节模块-->

  <div id="root" >
    <h1 style="color: black">春节</h1>
    <h4 style="text-align: left;line-height: 40px;color: black">
      &ensp;&ensp;&ensp;&ensp;春节（Spring Festival），即中国农历新年，
      俗称新春、新岁、岁旦等，口头上又称过年、过大年。春节历史悠久，由上古时代岁首祈岁祭祀演变而来。
      万物本乎天、人本乎祖，祈岁祭祀、敬天法祖，报本反始也。春节的起源蕴含着深邃的文化内涵，
      在传承发展中承载了丰厚的历史文化底蕴。在春节期间，全国各地均有举行各种庆贺新春活动，带有浓郁的各地地方特色。
    </h4>
<!--
    <br><br><br>
    <div id="gif">
      <p style="text-align: left">
        <img src="../assets/bainian.gif"  width="41%" height="41%" alt=""/>
      </p>
    </div>
    -->




  </div>

</template>

<script>
export default {
  name: "spring_festivial",
  methods:{
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
  },
  mounted() {
    this.show()
  }
}

</script>

<style scoped>

#root{
  background:url("../assets/bainian.gif");

  width: 100%;
  height: 100%;
  background-size: 100% 100%;

}


</style>
