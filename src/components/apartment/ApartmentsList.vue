<template>
  <slot name="title"></slot>
  <ConteinerPageVue>
    <div class="apartments-list">
      <template v-for="apartment in items">
        <slot name="apartment" v-bind:apartment="apartment"></slot>
      </template>
      <!-- <ApartmentsItemVue
        v-for="{ id, rating, imgUrl, descr, price } in items"
        :key="id"
        :rating="rating"
        :price="price"
        :description="descr"
        :imgSrc="imgUrl"
      /> -->
    </div>
  </ConteinerPageVue>
</template>

<script>
import ConteinerPageVue from "../shared/ConteinerPage.vue";

export default {
  name: "ApartmentsList",
  components: { ConteinerPageVue },
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
