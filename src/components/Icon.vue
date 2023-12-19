<script setup>
    defineProps({
        icontype : {
            type: Number,
            required: true
        }
    })
</script>

<template>
    <img v-if="icontype == 1" src="./../assets/icons/home-svgrepo-com.svg" alt="" class="w-8 h-8">
</template>