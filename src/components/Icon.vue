<template>
    <font-awesome-icon :class="`fa-${icon}`" />
</template>
  
<script>
  export default {
    props: {
      icon: {
        type: String,
        required: true
      }
    }
  };
</script>
  