<template>
  <div class="fixed h-screen ">
    <div 
      class="sidebar-container h-full text-black fixed bg-white w-[17%] px-4 shadow-lg" 
    >
      <div class="flex items-center w-9 mt-5 ml-3 mb-4">
        <img src="../assets/icons/logo.svg" alt="" class="mr-3">
        <p class="text-2xl font-bold text-[#5d596c]">Vuexy</p>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
  
<script>
//6
//17
  export default {
    
  };
</script>
<style>
.sidebar-container {
    height: 100%; /* или конкретная высота в пикселях */
    overflow-y: auto;
}

/* Настройка внешнего вида ползунка (опционально) */
.sidebar-container::-webkit-scrollbar {
    width: 1px;
}

.sidebar-container::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 10px;
}
</style>