<template>
  <ConteinerPageVue>
    <ApartmentFilterFormVue
      class="apartments-filter"
      @submit="filter"
    ></ApartmentFilterFormVue>
  </ConteinerPageVue>
  <p v-if="!filteredApartments.length">Ничего не найдено</p>
  <ApartmentsListVue v-else :items="filteredApartments">
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
  <FooterPage></FooterPage>
</template>

<script>
import ApartmentsListVue from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";
import ApartmentsItemVue from "./components/apartment/ApartmentsItem.vue";
import ApartmentFilterFormVue from "./components/ApartmentFilterForm.vue";
import ConteinerPageVue from "./components/shared/ConteinerPage.vue";
import FooterPage from "./components/FooterPage.vue";

export default {
  name: "App",
  components: {
    ApartmentsListVue,
    ApartmentsItemVue,
    ApartmentFilterFormVue,
    ConteinerPageVue,
    FooterPage,
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
    filteredApartments() {
      console.log(this.filters.price, this.filters.city);
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  methods: {
    hanselNativeClick(value) {
      console.log(value, "value---click");
    },

    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
      console.log(this.filters.price, this.filters.city);
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;

      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
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
.apartments-filter {
  margin-bottom: 40px;
}
</style>
