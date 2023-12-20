<template>
    <div class="flex">
        <div class="flex border-blue-500 border-2 rounded-xl divide-x-[2px] divide-gray-300">
            <p class="p-2">{{ text }}</p>
            <input class="rounded-xl bg-transparent" type="text" :placeholder="placeholder" >
        </div>
    </div>
</template>

<script>
    export default{
        props: {
            text: {
                type: String,
                default: "Text"
            },
            placeholder: {
                type: String,
                default: "Placeholder"
            }
        }
    }
</script>