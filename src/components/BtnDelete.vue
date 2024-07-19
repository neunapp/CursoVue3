<template>
  <div v-if="!showConfirmation">
    <a 
    href="#" 
    class="py-2 px-4 bg-red-500 rounded-full"
    @click="openDeleteConfirmation()">Elimnar</a>
  </div>
  <div v-else>
    <a href="#" class="py-2 px-4 mx-1 bg-red-500 rounded-full">Si</a>
    <a 
      href="#" 
      class="py-2 px-4 mx-1 bg-gray-500 rounded-full"
      @click="showConfirmation = false">No</a>
  </div>
</template>

<script setup>
  // imports
  import { ref } from 'vue';

  const showConfirmation = ref(false)
  
  // methods
  const openDeleteConfirmation = () => {
    showConfirmation.value = true
  }

</script>

<style lang="scss" scoped>

</style>