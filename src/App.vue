<template>
  <MainTemplate/>
  <TimeLine/>
  <WeddingPictures />
</template>

<script>
import MainTemplate from './components/MainTemplate.vue'
import TimeLine from './components/TimeLine.vue';
import WeddingPictures from './components/WeddingPictures.vue'

export default {
  name: 'App',
  components: {
    MainTemplate,
    TimeLine,
    WeddingPictures
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
.font-default {
  font-family: Verdana, Geneva, Tahoma, sans-serif;;
}

.font-handwriting {
  font-family: 'FzBefront', serif;
}

.no-gutters {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

</style>
