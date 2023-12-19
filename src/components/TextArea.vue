<template>
    <textarea :value="value" @input="updateValue($event.target.value)" class="border-blue-300 border-2 rounded-xl"></textarea>
</template>
  
<script>
  export default {
    props: {
      modelValue: { 
        type: String,
        default: ''
      }
    },
    methods: {
      updateValue(value) {
        this.$emit('update:modelValue', value); 
      }
    },
    computed: {
      value() {
        return this.modelValue; 
      }
    }
  };
</script>
