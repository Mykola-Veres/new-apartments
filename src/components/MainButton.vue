<template>
  <button v-bind:type="type" :class="{btn: true, btnoutline: outline}">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "MainButton",
    props: {
      type: {
        type: String,
        default: "button",
        required: true},
      outline:{
        type: Boolean,
        default: false,
      }
      } 
    }
</script>

<style lang="scss" scoped>

.btn{
  background: black;

  &outline{
    background: red;
  }
}

</style>