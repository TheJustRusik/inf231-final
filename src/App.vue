<script setup>
    import Test from './components/Button.vue';
</script>

<template>  
    <Test buttonText="Lol" :isDropdown="true" :options="[1,2,3]"></Test>
</template>
