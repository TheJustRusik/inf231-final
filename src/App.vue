<script setup>
    import Test from './components/CheckBox.vue';
</script>

<template>    
    <Test :checkboxId="'1'" :modelValue="true"></Test>
    <Test :checkboxId="'2'" :label="'Hello'"></Test>
</template>
