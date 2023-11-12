<template>
  <MainTemplate/>
  <TimeLine/>
</template>

<script>
import MainTemplate from './components/MainTemplate.vue'
import TimeLine from './components/TimeLine.vue';

export default {
  name: 'App',
  components: {
    MainTemplate,
    TimeLine
  }
}
</script>

<style>
#app {
  font-family: 'FzBefront', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
</style>
