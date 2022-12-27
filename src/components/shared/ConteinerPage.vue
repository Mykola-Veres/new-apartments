<template>
  <div class="conteiner-page">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ConteinerPage",
};
</script>

<style lang="scss" scoped>
.conteiner-page {
  max-width: 1110px;
  margin: 0 auto;
}
</style>
