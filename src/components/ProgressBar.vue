<template>
    <div class="progress-bar-container">

      <div v-if="progress > 70" class="progress-bar bg-red-500" :style="{ width: progress + '%' }"></div>
      <div v-else-if="progress > 40" class="progress-bar bg-sky-500" :style="{ width: progress + '%' }"></div>
      <div v-else class="progress-bar bg-purple-500" :style="{ width: progress + '%' }"></div>
    </div>
</template>
  
<script>
  export default {
    props: {
      progress: {
        type: Number,
        required: true,
        validator: (value) => value >= 0 && value <= 100
      },
      
    }
  };
</script>
  
<style>
  .progress-bar-container {
    width: 100%;
    background-color: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .progress-bar {
    height: 5px;
    transition: width 0.3s ease;
  }
</style>
  