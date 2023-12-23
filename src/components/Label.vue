<template>
    <div class="labels-badge">
      <span v-if="label" class="label">{{ label }}</span>
      <span v-if="badge" class="badge">{{ badge }}</span>
    </div>
  </template>
  
<script>
  export default {
    props: {
      label: String,
      badge: [String, Number]
    }
  };
</script>
  
<style>
  .labels-badge {
    display: flex;
    align-items: center;
  }
  
  .label {
    background-color: #f0f0f0;
    padding: 5px 10px;
    border-radius: 4px;
    margin-right: 10px;
  }
  
  .badge {
    background-color: #ff6347;
    color: white;
    padding: 3px 7px;
    border-radius: 50%;
    font-size: 0.75em;
  }
</style>
  