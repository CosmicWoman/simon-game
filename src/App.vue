<template>
  <div id="app">
    <SimonGame/>
  </div>
</template>

<script>
import SimonGame from "@/components/SimonGame";

export default {
  name: 'App',

  components: {
    SimonGame
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
