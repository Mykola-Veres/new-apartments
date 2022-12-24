<template>
  <button v-bind:type="type">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "MainButton",
    props: {type: {
      type: String,
      default: "button",
      required: true}} 
    }
</script>

<style lang="scss" scoped>

</style>