<template>
    <div class="slider-container">
        <input
            type="range"
            :min="min"
            :max="max"
            :step="step"
            v-model="currentValue"
            @input="updateValue"
        />
        <span>{{ currentValue }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: Number,
                default: 0
            },
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 100
            },
            step: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {
                currentValue: this.value
            };
        },
        methods: {
            updateValue() {
                this.$emit('input', this.currentValue);
            }
        },
        watch: {
            value(newValue) {
                this.currentValue = newValue;
            }
        }
    };
</script>

