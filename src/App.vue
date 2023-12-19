<script setup>
    import Test from './components/RadioButton.vue';
</script>

<template>  
    <Test :radioGroupName="'2'" :options="[{value:1,text:'1'},{value:2,text:'2'},{value:1,text:'1'}]"></Test>
</template>
