<template>
  <div class="apartments-item">
    <div class="apartments-item__inner">
      <img :src="imgSrc" class="apartments-item__photo" />
      <div class="apartments-item__content">
        <p class="apartments-item__description">{{ description }}</p>
        <div class="apartments-item__rating">
          <StarRatingVue :rating="rating"></StarRatingVue>
        </div>
        <div class="apartments-item__price">UAN {{ price }}</div>
        <a href="http://facebook.com" @click.prevent.stop="handelClick"
          >facebook</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import StarRatingVue from "../StarRating.vue";

export default {
  name: "ApartmentsItem",
  components: {
    StarRatingVue,
  },
  methods: {
    log(i, event) {
      console.log(event, i);
    },
    handelClick() {
      console.log("handelClickFB");
    },
  },
  props: {
    description: {
      type: String,
      default: "",
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-item {
  position: relative;
  width: 350px;
  padding: 0 15px;
  margin-bottom: 30px;

  &__inner {
    position: relative;
  }

  &__content {
    position: relative;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.4s;
    background: rgba(#0f1d2d, 0.7);
    min-height: 200px;
    color: #fff;
    text-align: left;
    line-height: 1.4;
    cursor: pointer;
    z-index: 1;

    &:hover {
      opacity: 1;
    }
  }

  &__description {
    margin-bottom: 20px;
    max-height: calc(1em * 1.4 * 4);
    overflow: hidden;
  }

  &__rating {
    margin-bottom: 20px;
  }

  &__price {
    font-size: 20px;
    font-weight: 600;
  }

  &__photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
