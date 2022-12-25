<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <NewCopponentVue v-on:click="increment" :id="$style.app"></NewCopponentVue>
  <MainButton @click="increment" type="button" outline> <span> By</span> Click Me </MainButton>
  <h2 :id="$style.app">{{ title }}</h2>
  <DerectiveTestVue></DerectiveTestVue>
  <StarRatingVue :rating="3.6"></StarRatingVue>
</template>

<script>

import MainButton from './components/MainButton.vue';
import NewCopponentVue from './components/NewCopponent.vue';
import DerectiveTestVue from './components/DerectiveTest.vue';
import StarRatingVue from './components/StarRating.vue';

export default {
  name: 'App',
  components: {
    NewCopponentVue,
    MainButton,
    DerectiveTestVue,
    StarRatingVue,
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

<style module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
