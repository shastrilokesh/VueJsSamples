<template>
  <div id="app">
    <div class = "robot-name">this is a test</div>
    <RobotBuilder msg="Welcome to Your Vue.js App"/>
    <div class="container">
    <aside class="aside">
      Hi i am here
    </aside>
  </div>
  </div>

</template>

<script>
import RobotBuilder from './build/RobotBuilder'

export default {
  name: 'App',
  components: {
    RobotBuilder
  }
}
</script>

<style scoped>
.robot-name {
  color:red;
}
body{
  background: linear-gradient(to bottom,#555,#999);
  background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.continer {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  color: red;
  width:100px;
  min-height: 300px;

}
</style>
