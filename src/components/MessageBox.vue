<template>
    <div class="message-box" :class="typeClass">
      <p>{{ message }}</p>
    </div>
</template>
  
<script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'info' // может быть 'info', 'warning', 'error'
      }
    },
    computed: {
      typeClass() {
        return `message-${this.type}`;
      }
    }
  };
</script>
  
<style>
  .message-box {
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  
  .message-info {
    background-color: #d1ecf1;
    border: 1px solid #bee5eb;
    color: #0c5460;
  }
  
  .message-warning {
    background-color: #fff3cd;
    border: 1px solid #ffeeba;
    color: #856404;
  }
  
  .message-error {
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    color: #721c24;
  }
</style>
  