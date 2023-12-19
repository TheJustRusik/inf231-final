<template>
    <div class="toggle-switch">
        <input 
            type="checkbox" 
            :id="switchId" 
            :checked="modelValue" 
            @change="onChange($event.target.checked)" 
        />
        <label :for="switchId" class="slider"></label>
    </div>
</template>

<script>
    export default {
        props: {
            modelValue: {
                type: Boolean,
                default: false
            },
            switchId: {
                type: String,
                required: true
            }
        },
        methods: {
            onChange(checked) {
                this.$emit('update:modelValue', checked);
            }
        }
    };
</script>

<style>
    .toggle-switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .toggle-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 34px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
    }

    input:checked + .slider {
        background-color: #2196F3;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        transform: translateX(26px);
    }
</style>
