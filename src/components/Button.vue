<script setup>
    defineProps({
        msg : {
            type: String,
            required: true,
            default: "Default"
        }
    })
</script>

<template>
    <button>    
        <div class="flex justify-center items-center bg-yellow-400 rounded-full">
            <slot></slot>
            <p class="text-black font-semibold font-2xl py-2 mx-2">{{ msg.toUpperCase() }}</p>
        </div>
    </button>
</template>