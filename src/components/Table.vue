<template>
  <div class="">
    <div class=" grid divide-y " :class="'grid-cols-' + cols.length">
      <p class="px-6" v-for="str in cols">{{ str }}</p>
      <slot></slot>
    </div>
  </div>
</template>
  
<script>
  export default {
    props: {
      cols:{
        type:Array,
        required:true
      }
    }
  };
</script>
  
  