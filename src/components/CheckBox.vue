<template>
    <div>
      <input type="checkbox" :id="checkboxId" :checked="modelValue" @change="onChange">
      <label :for="checkboxId">{{ label }}</label>
    </div>
</template>
  
<script>
  export default {
    props: {
      modelValue: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ''
      },
      checkboxId: {
        type: String,
        required: true
      }
    },
    methods: {
      onChange(event) {
        this.$emit('update:modelValue', event.target.checked);
      }
    }
  };
</script>
  

  