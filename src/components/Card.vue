<template>
  <div class="bg-white shadow-lg rounded-lg">
    <div class="my-4 mx-6">
      <div class="flex justify-between items-center">
        <div>
          <p class="text-lg text-[#5d596c]">{{ title }}</p>
          <p class="text-sm text-gray-500">{{ subtitle }}</p>
        </div>
        <button><i class="fa-solid fa-ellipsis-vertical"></i></button>
        
      </div>
      <slot></slot>
    </div>
  </div>
</template>
  
<script>
  export default {
    props: {
      title: String,
      subtitle: String,
    }
  };
</script>
 
  