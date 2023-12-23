<template>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li v-for="(item, index) in items" :key="index" class="breadcrumb-item" :class="{ active: index === items.length - 1 }">
          <a v-if="index < items.length - 1" :href="item.href">{{ item.text }}</a>
          <span v-else>{{ item.text }}</span>
        </li>
      </ol>
    </nav>
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
  .breadcrumb {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
  }
  
  .breadcrumb-item {
    margin-right: 0.5em;
  }
  
  .breadcrumb-item::after {
    content: '/';
    margin-left: 0.5em;
  }
  
  .breadcrumb-item:last-child::after {
    content: '';
  }
  
  .breadcrumb-item a {
    color: #0275d8;
    text-decoration: none;
  }
  
  .breadcrumb-item.active a {
    color: #000;
    text-decoration: underline;
  }
  
</style>
  