<template>
  <MainTemplate/>
  <WelcomeSection />
  <TimelineSection />
  <MemberInfo />
  <WeddingPictures />
  <EndSection />
</template>

<script>
import MainTemplate from './components/MainTemplate.vue'
import WelcomeSection from './components/WelcomeSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import MemberInfo from './components/MemberInfo.vue'
import WeddingPictures from './components/WeddingPictures.vue'
import EndSection from './components/EndSection.vue'

export default {
  name: 'App',
  components: {
    MainTemplate,
    WelcomeSection,
    TimelineSection,
    MemberInfo,
    WeddingPictures,
    EndSection
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Meow+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Meow+Script&family=Patrick+Hand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,200&display=swap');
@font-face {
    font-family: Housttely Signature;
    src: url("./assets/font/SVN-Housttely-Signature.otf") format("opentype");
}
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

.font-roboto{
  font-family: 'Roboto Mono', monospace;
}

.font-housttely {
  font-family: 'Housttely Signature', cursive;
}
.font-meow-script {
  font-family: 'Meow Script', cursive;
}
.font-patrick {
  font-family: 'Patrick Hand', cursive;
}

.font-handwriting {
  font-family: 'FzBefront', serif;
}

.no-gutters {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
.fs-16 {
  font-size: 16px;
}
.fs-20 {
  font-size: 20px;
}
.fs-26 {
  font-size: 26px;
}

.fs-30 {
  font-size: 30px;
}
.fs-40 {
  font-size: 40px;
}
.fs-60 {
  font-size: 60px;
}
.fs-80 {
  font-size: 80px;
}

.fw-700 {
  font-weight: 700;
}

</style>
