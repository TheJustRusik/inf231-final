<template>
    <div class="card">
      <div v-if="title" class="card-header">
        {{ title }}
      </div>
      <div class="card-body">
        <slot></slot>
      </div>
      <div v-if="showActions" class="card-actions">
        <slot name="actions"></slot>
      </div>
    </div>
</template>
  
<script>
  export default {
    props: {
      title: String,
      showActions: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
  
<style>
  .card {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 20px;
      margin: 10px;
  }
  
  .card-header {
      font-size: 1.25em;
      margin-bottom: 20px;
  }
  
  .card-body {
      margin-bottom: 20px;
  }
  
  .card-actions {
      text-align: right;
  }
</style>
  