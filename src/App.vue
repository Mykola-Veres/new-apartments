<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <NewCopponentVue v-on:click="increment"></NewCopponentVue>
  <MainButton @click="increment" type="button" outline>
    <span> By</span> Click Me
  </MainButton>
  <DerectiveTestVue></DerectiveTestVue>
  <StarRatingVue :rating="3.6"></StarRatingVue>

  <ApartmentsListVue :items="apartments" />
</template>

<script>
import MainButton from "./components/MainButton.vue";
import NewCopponentVue from "./components/NewCopponent.vue";
import DerectiveTestVue from "./components/DerectiveTest.vue";
import StarRatingVue from "./components/StarRating.vue";
import ApartmentsListVue from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";

export default {
  name: "App",
  components: {
    NewCopponentVue,
    MainButton,
    DerectiveTestVue,
    StarRatingVue,
    ApartmentsListVue,
  },
  data() {
    return {
      apartments,
      amountOfClicks: 10,
    };
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`;
    },
  },
  methods: {
    increment() {
      this.amountOfClicks += 10;
    },
  },
};
</script>

<style lang="scss" module>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
