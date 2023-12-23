<template>
    <ul class="list">
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
      </li>
    </ul>
</template>
  
<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  };
</script>
  
<style>
  .list {
    list-style-type: none;
    padding: 0;
  }
  
  .list li {
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
  
  .list li:last-child {
    border-bottom: none;
  }
</style>
  