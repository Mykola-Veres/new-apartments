<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <NewCopponentVue v-on:click="increment"></NewCopponentVue>
  <MainButton @click="increment" type="button"> <span> By</span> Click Me </MainButton>
  <h2>{{ title }}</h2>
</template>

<script>

import MainButton from './components/MainButton.vue';
import NewCopponentVue from './components/NewCopponent.vue';

export default {
  name: 'App',
  components: {
    NewCopponentVue,
    MainButton,
},
data(){return{
  amountOfClicks: 10
}},
computed: {
  title(){
    return`Amount of clicks ${this.amountOfClicks}`}
},
methods: {
  increment(){
    this.amountOfClicks += 10
  }
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
