<template>
  <div v-show="true">
    <h2 v-if="isVisible">Secondary Title</h2>
    <ul>
      <template v-for="fruit in fruits">
        <li v-if="fruit === `apple`" :key="fruit">   
            {{ fruit }}          
        </li>
      </template>  
    </ul>
    <ul>
      <li v-for="(car, key) in cars" :key="key">{{ key  }} {{ car.color }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "DerectiveTest",
    data() {
      return{
        isVisible: true,
        fruits: ["banana", "apple", "kiwi", "grapes", "pears", "peaches"],
        cars: {
          mazda: {
            color: "red",
          },
          bmw: {
            color: "white",
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>