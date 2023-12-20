<template>
    <div class="accordion">
      <div v-for="(item, index) in items" :key="index" class="accordion-item">
        <button class="accordion-header" @click="toggle(index)">
          {{ item.header }}
        </button>
        <div v-if="openedItem === index" class="accordion-content">
          {{ item.content }}
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        openedItem: null
      };
    },
    methods: {
      toggle(index) {
        this.openedItem = this.openedItem === index ? null : index;
      }
    }
  };
</script>
  
<style>
  .accordion-item {
    margin-bottom: 10px;
  }
  
  .accordion-header {
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ddd;
    background-color: #f7f7f7;
  }
  
  .accordion-content {
    padding: 10px;
    border: 1px solid #ddd;
    border-top: none;
  }
</style>
  