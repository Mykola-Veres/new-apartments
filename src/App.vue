<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <NewCopponentVue ></NewCopponentVue>
  <MainButton type="submit">Click Me </MainButton>
</template>

<script>

import MainButton from './components/MainButton.vue';
import NewCopponentVue from './components/NewCopponent.vue';

export default {
  name: 'App',
  components: {
    NewCopponentVue,
    MainButton,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
