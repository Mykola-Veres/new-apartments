<template>
  <form class="form" @submit.prevent="handelSubmit">
    <CustomSelectVue v-model="city" :items="cities" />
    <CustomInputVue v-model="price" placeholder="price that" />
    <MainButtonVue class="form-submit" type="submit"
      >Search Apartments</MainButtonVue
    >
  </form>
</template>

<script>
import CustomInputVue from "./shared/CustomInput.vue";
import CustomSelectVue from "./shared/CustomSelect.vue";
import MainButtonVue from "./shared/MainButton.vue";

export default {
  name: "ApartmentFilterForm",
  components: {
    CustomInputVue,
    CustomSelectVue,
    MainButtonVue,
  },
  data() {
    return { city: "", price: "" };
  },
  methods: {
    handelSubmit() {
      this.$emit("submit", { city: this.city, price: this.price });
    },
  },

  computed: {
    cities() {
      return [{ value: "", label: "cities", selected: true }, "kyiv", "lviv"];
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>
