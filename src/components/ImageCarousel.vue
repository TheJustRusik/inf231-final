<template>
    <div class="carousel">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-item" v-for="(image, index) in images" :key="index">
          <img :src="image" :alt="`Image ${index + 1}`">
        </div>
      </div>
      <button @click="prev">Previous</button>
      <button @click="next">Next</button>
    </div>
</template>
  
<script>
  export default {
    props: {
      images: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentIndex: 0
      };
    },
    methods: {
      next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      }
    }
  };
</script>
  
<style>
  .carousel {
    position: relative;
    overflow: hidden;
  }
  
  .carousel-inner {
    display: flex;
    transition: transform 0.3s ease;
  }
  
  .carousel-item {
    flex: 0 0 100%;
  }
  
  .carousel-item img {
    width: 100%;
    display: block;
  }
</style>
  