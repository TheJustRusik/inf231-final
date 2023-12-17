<script setup>
    

    defineProps({
        icontype : {
            type: Number,
            required: true
        },
        w : {
            type : Number,
            required : false
        },
        h : {
            type : Number,
            required : false
        }
    })
</script>

<template>
    <img v-if="icontype == 1" src="./../assets/icons/home-svgrepo-com.svg" alt="" class="w-16 ">
</template>