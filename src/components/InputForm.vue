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
    <input :type="type"> 
</template>