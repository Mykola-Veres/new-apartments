<template>
  <ConteinerPageVue>
    <div class="apartments-list">
      <ApartmentsItemVue
        v-for="{ id, rating, imgUrl, descr, price } in items"
        :key="id"
        :rating="rating"
        :price="price"
        :description="descr"
        :imgSrc="imgUrl"
      />
    </div>
  </ConteinerPageVue>
</template>

<script>
import ApartmentsItemVue from "./ApartmentsItem.vue";
import ConteinerPageVue from "../shared/ConteinerPage.vue";

export default {
  name: "ApartmentsList",
  components: { ApartmentsItemVue, ConteinerPageVue },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
</style>
