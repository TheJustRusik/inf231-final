<template>
    <div>
        <label v-for="option in options" :key="option.value">
            <input 
                type="radio" 
                :name="radioGroupName" 
                :value="option.value" 
                :checked="modelValue === option.value"
                @change="onChange($event.target.value)" 
            >
            {{ option.text }}
        </label>
    </div>
</template>

<script>
    export default {
        props: {
            modelValue: {
                type: [String, Number], 
                default: ''
            },
            options: {
                type: Array,
                required: true
            },
            radioGroupName: {
                type: String,
                required: true
            }
        },
        methods: {
            onChange(value) {
                this.$emit('update:modelValue', value);
            }
        }
    };
</script>

