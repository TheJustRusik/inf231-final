<script>
    import { reactive } from 'vue';
    export default{
        props: {
            type: {
                type: String,
                required: true,
                default: "text"
            }
        },

        setup(props, {signals}) {
            props = reactive(props)
            return {
                type: props.type
            };
        }
    }   
</script>

<template>
    <div class="flex">
        <div class="">
            <input :type="type" class="border-blue-300 border-2 rounded-xl"> 
        </div>
    </div>
    
</template>