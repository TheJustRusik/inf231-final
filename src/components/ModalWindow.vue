<template>
    <div v-if="isVisible" class="modal-overlay">
      <div class="modal-window" @click.stop>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
        <div class="modal-content">
          <slot></slot>
        </div>
        <div class="modal-footer">
        <button @click="isVisible = false">Close</button>
        </div>
      </div>
    </div>
</template>
  
<script>
 
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      isVisible: {
        type: Boolean,
        default: false
      }
    },
    
      
    
  };
</script>
  
<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-window {
    background: white;
    padding: 20px;
    border-radius: 5px;
    min-width: 300px;
  }
  
  .modal-content {
    margin-bottom: 20px;
  }
  
  .modal-footer {
    text-align: right;
  }
  
</style>
  