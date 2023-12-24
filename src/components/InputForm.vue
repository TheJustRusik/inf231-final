<script>
    import { reactive } from 'vue';
    export default{
        props: {
            type: {
                type: String,
                required: true,
                default: "text"
            },
            placeholder: {
                type: String
            }
        },

        setup(props, {signals}) {
            props = reactive(props)
            return {
                type: props.type,
            };
        }
    }   
</script>

<template>
    <div class="flex">
        <div class="">
            <input :placeholder="placeholder" :type="type" class="border-gray-300 border p-2 rounded-lg"> 
        </div>
    </div>
    
</template>