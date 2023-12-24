<template>
    <div class="carousel bg-[#7367f0] rounded-lg shadow-lg">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-item flex justify-between items-center" v-for="(image, index) in images" :key="index">
          <div class="text-white p-8">
            <p class="text-lg ">Website Analytics</p>
            <p class="text-sm mb-2">Total 28.5% Conversion Rate</p>
            <p class="text-lg mb-2" v-if="index == 1">Spending</p>
            <p class="text-lg mb-2" v-else-if="index == 2">Traffic</p>
            <p class="text-lg mb-2" v-else>Revenue Sources</p>
            <div class="grid grid-cols-2 gap-6">
              <div class="flex">
                <div class="bg-[#6258cc] rounded px-2 mr-2">
                  <p class="text-md" v-if="index == 1">12h</p>
                  <p class="text-md" v-else-if="index == 2">28%</p>
                  <p class="text-md" v-else>268</p>
                </div>
                <p class="text-md" v-if="index == 1">Spend</p>
                <p class="text-md" v-else-if="index == 2">Sessions</p>
                <p class="text-md" v-else>Direct</p>
              </div>
              <div class="flex">
                <div class="bg-[#6258cc] rounded px-2 mr-2">
                  <p class="text-md" v-if="index == 1">18</p>
                  <p class="text-md" v-else-if="index == 2">1.2k</p>
                  <p class="text-md" v-else>890</p>
                </div>
                <p class="text-md" v-if="index == 1">Views</p>
                <p class="text-md" v-else-if="index == 2">Logouts</p>
                <p class="text-md" v-else>Revenue</p>
              </div>
              <div class="flex">
                <div class="bg-[#6258cc] rounded px-2 mr-2">
                  <p class="text-md" v-if="index == 1">27</p>
                  <p class="text-md" v-else-if="index == 2">3.1k%</p>
                  <p class="text-md" v-else>620</p>
                </div>
                <p class="text-md" v-if="index == 1">Organick</p>
                <p class="text-md" v-else-if="index == 2">Direct</p>
                <p class="text-md" v-else>Visit</p>
              </div>
              <div class="flex">
                <div class="bg-[#6258cc] rounded px-2 mr-2">
                  <p class="text-md" v-if="index == 1">2.3k</p>
                  <p class="text-md" v-else-if="index == 2">12%</p>
                  <p class="text-md" v-else>2.2k</p>
                </div>
                <p class="text-md" v-if="index == 1">Bought</p>
                <p class="text-md" v-else-if="index == 2">Battary</p>
                <p class="text-md" v-else>Something</p>
              </div>
              
            </div>
          </div>
          <img :src="image" :alt="`Image ${index + 1}`" class="w-[170px] h-[170px] mr-8">
        </div>
      </div>
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
    mounted() {
      this.interval = setInterval(() => {
        this.next();
      }, 2000); 
    },
    beforeDestroy() {
      clearInterval(this.interval);
    },
    data() {
      return {
        currentIndex: 0
      };
    },
    methods: {
      next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
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
  
  
</style>
  