<template>
  <div>
    <el-button @click="clothes">衣</el-button>
    <el-button @click="eat">食</el-button>
    <el-button @click="live">住</el-button>
    <el-button @click="behavior">行</el-button>
  </div>
</template>

<script>
export default {
  name: "main",
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
    }
  }

}
</script>

<style scoped>

</style>