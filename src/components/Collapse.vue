<template>
    <div class="collapse-container" >
      
      <button @click="toggle" class="collapse-button w-full rounded-lg" :class="{'bg-[#f7f7f7]': prim}">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <i :class="icon" class="ml-1 text-[#5d596c]"></i>
            <p class="ml-2 text-[#5d596c] font-semibold">{{ title }}</p>
          </div>
          <i class="fa-solid fa-chevron-down ml-1 text-[#5d596c] -rotate-90"></i>
        </div>
      </button>
      <div v-show="isOpen" class="">
        <slot></slot>
      </div>
    </div>
</template>
  
<script>
  export default {
    props: {
      prim: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        default: 'fa-regular fa-circle text-xs'
      }
    },
    data() {
      return {
        isOpen: false,
        rotation: 90
      };
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen;
      }
    }
  };
</script>
  
<style>
  .collapse-container {
    margin-bottom: 10px;
  }
  
  .collapse-button {
    padding: 10px;
    cursor: pointer;
    border: none;
  }
  
  
</style>
  