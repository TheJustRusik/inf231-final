<template>
    <div v-if="ppp >= 0" class="flex text-green-500 items-center">
        <i class="fa-solid fa-arrow-up mr-1"></i>
        <p class="text-sm ">{{ppp}}%</p>
    </div>
    <div v-else class="text-red-500 flex items-center">
        <i class="fa-solid fa-arrow-down mr-1"></i>
        <p class="text-sm ">{{ppp}}%</p>
    </div>
    
</template>
<script>
    export default{
        props:{
            ppp:{
                type:Number,
                required: true
            }
        }
    }
</script>