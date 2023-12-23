<template>
    <div class="search-bar">
      <input 
        type="text" 
        v-model="searchQuery" 
        @keyup.enter="submitSearch" 
        placeholder="Введите запрос..."
      />
      <button @click="submitSearch">Поиск</button>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        searchQuery: ''
      };
    },
    methods: {
      submitSearch() {
        this.$emit('onSearch', this.searchQuery);
      }
    }
  };
</script>
  
<style>
  .search-bar {
    display: flex;
    align-items: center;
  }
  
  .search-bar input {
    padding: 8px;
    margin-right: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    flex-grow: 1;
  }
  
  .search-bar button {
    padding: 8px 16px;
    background-color: #007bff;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .search-bar button:hover {
    background-color: #0056b3;
  }
</style>
  