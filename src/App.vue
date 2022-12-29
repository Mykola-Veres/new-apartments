<template>
  <ApartmentFilterFormVue @submit="logger"></ApartmentFilterFormVue>

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
import ApartmentsListVue from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";
import ApartmentsItemVue from "./components/apartment/ApartmentsItem.vue";
import ApartmentFilterFormVue from "./components/ApartmentFilterForm.vue";

export default {
  name: "App",
  components: {
    ApartmentsListVue,
    ApartmentsItemVue,
    ApartmentFilterFormVue,
  },
  data() {
    return {
      apartments,
      amountOfClicks: 10,
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`;
    },
  },
  methods: {
    hanselNativeClick(value) {
      console.log(value, "value---click");
    },

    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName() {
      return this.apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice() {
      return this.apartments.filter((apartment) => {
        return apartment.location.price >= this.filters.price;
      });
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
