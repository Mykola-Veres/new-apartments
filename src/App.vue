<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <NewCopponentVue v-on:click="increment"></NewCopponentVue>
  <MainButton @click="increment" type="button" outline>
    <span> By</span> Click Me
  </MainButton>
  <DerectiveTestVue></DerectiveTestVue>
  <StarRatingVue :rating="3.6"></StarRatingVue>

  <h2>{{ text }}</h2>
  <h2>{{ number }}</h2>

  <input
    type="text"
    :value="number"
    @input="(event) => (number = event.target.value)"
  />

  <CustomInputVue />

  <h2>{{ text }}</h2>
  <CustomSelect v-model="city" :items="[`hkhjk`, `ghijghk`]"></CustomSelect>

  <ApartmentsListVue :items="apartments">
    <template v-slot:title>Подборка согласно выбора</template>
    <template v-slot:apartment="{ apartment }">
      <ApartmentsItemVue
        :key="apartment.id"
        :rating="apartment.rating"
        :price="apartment.price"
        :description="apartment.descr"
        :imgSrc="apartment.imgUrl"
        @click="hanselNativeClick"
      ></ApartmentsItemVue>
    </template>
  </ApartmentsListVue>
</template>

<script>
import MainButton from "./components/MainButton.vue";
import NewCopponentVue from "./components/NewCopponent.vue";
import DerectiveTestVue from "./components/DerectiveTest.vue";
import StarRatingVue from "./components/StarRating.vue";
import ApartmentsListVue from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";
import ApartmentsItemVue from "./components/apartment/ApartmentsItem.vue";
import CustomInputVue from "./components/shared/CustomInput.vue";
import CustomSelect from "./components/shared/CustomSelect.vue";

export default {
  name: "App",
  components: {
    NewCopponentVue,
    MainButton,
    DerectiveTestVue,
    StarRatingVue,
    ApartmentsListVue,
    ApartmentsItemVue,
    CustomInputVue,
    CustomSelect,
  },
  data() {
    return {
      apartments,
      amountOfClicks: 10,
      text: "",
      number: "",
      city: "",
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
    hanselNativeClick() {
      console.log("emitClick");
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
