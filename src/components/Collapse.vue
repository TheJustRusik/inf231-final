<template>
    <div class="collapse-container">
      <button @click="toggle" class="collapse-button">
        {{ title }}
      </button>
      <div v-show="isOpen" class="collapse-content">
        <slot></slot>
      </div>
    </div>
</template>
  
<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen;
      }
    }
  };
</script>
  
<style>
  .collapse-container {
    margin-bottom: 10px;
  }
  
  .collapse-button {
    padding: 10px;
    cursor: pointer;
    border: none;
    background-color: #f7f7f7;
  }
  
  .collapse-content {
    padding: 10px;
    border: 1px solid #ddd;
  }
</style>
  