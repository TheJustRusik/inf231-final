<template>
    <footer class="page-footer">
      <slot></slot> <!-- Для кастомного содержимого -->
      <p v-if="copyright">{{ copyright }}</p>
    </footer>
</template>
  
<script>
  export default {
    props: {
      copyright: String
    }
  };
</script>
  
<style>
  .page-footer {
    text-align: center;
    padding: 20px;
    border-top: 1px solid #eee;
    margin-top: 20px;
  }
  
</style>
  