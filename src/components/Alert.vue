<template>
    <div v-if="isVisible" :class="`alert alert-${type}`">
      <slot>{{ message }}</slot>
      <span class="alert-close" @click="close(); isVisible = false">&times;</span>
    </div>
</template>
  
<script>
  export default {
    props: {
      message: String,
      type: {
        type: String,
        default: 'info' // может быть 'info', 'warning', 'error', 'success'
      },
      isVisible: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      close() {
        this.$emit('update:isVisible', false);
      }
    }
  };
</script>
  
<style>
  .alert {
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-radius: 4px;
    position: relative;
  }
  
  .alert-close {
    position: absolute;
    top: 0;
    right: 10px;
    cursor: pointer;
  }
  
  .alert-info {
    background-color: #d1ecf1;
    border-color: #bee5eb;
    color: #0c5460;
  }
  
  .alert-warning {
    background-color: #fff3cd;
    border-color: #ffeeba;
    color: #856404;
  }
  
  .alert-error {
    background-color: #f8d7da;
    border-color: #f5c6cb;
    color: #721c24;
  }
  
  .alert-success {
    background-color: #d4edda;
    border-color: #c3e6cb;
    color: #155724;
  }
</style>
  