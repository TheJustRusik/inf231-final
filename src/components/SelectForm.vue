<script>
  import { reactive } from 'vue';

  export default {
    props:{
      options:{
        type: Array,
        required: true,
        default: () => [{val:1,txt:"Option 1"},{val:2,txt:"Option 2"},{val:3,txt:"Option 3"}]
        
      }
    },
    setup(props){

    }
  };
</script>

<template>
    <div>
      <select v-model="selectedOption">
        <option v-for="option in options" :key="option.val" :value="option.val">
          {{ option.txt }}
        </option>
      </select>
    </div>
</template>