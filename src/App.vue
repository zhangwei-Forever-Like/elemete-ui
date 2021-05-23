<template>
  <div id="app">
  <!-- <router-link to="/login">App</router-link> -->
  <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  
  }
}
</script>

<style>
#app{
  min-width: 1366px;
}
body{
  height: 100%;
  background-color: #2b4b6b;
}
*{
  margin: 0;
  padding: 0;
}
</style>
