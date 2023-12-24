<script>
  import { reactive } from 'vue';

  export default {
    props:{
      options:{
        type: Array,
        required: true,
        default: () => [{val:1,txt:"Option 1"},{val:2,txt:"Option 2"},{val:3,txt:"Option 3"}]
        
      },
      placeholder:{
        type: String,
        default: ''
      }
    },
    setup(props){

    }
  };
</script>

<template>
    <div>
      <select class="rounded-lg border w-full p-2 text-[#5d596c]">
        <option selected class="text-[#5d596c]">{{ placeholder }}</option>
        <option class="text-[#5d596c]" v-for="option in options" :key="option.val" :value="option.val">
          {{ option.txt }}
        </option>
      </select>
    </div>
</template>