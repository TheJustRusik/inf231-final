<template>
    <div class="page-header">
      <h1>{{ title }}</h1>
      <h2 v-if="subtitle">{{ subtitle }}</h2>
      <slot></slot> <!-- Для дополнительных элементов, таких как кнопки -->
    </div>
</template>
  
<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      subtitle: String
    }
  };
</script>
  
<style>
  .page-header {
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  
  .page-header h1 {
    margin: 0;
    padding: 0;
    font-size: 2em;
  }
  
  .page-header h2 {
    margin: 0;
    padding: 10px 0;
    font-size: 1.5em;
    color: #666;
  }
</style>
  