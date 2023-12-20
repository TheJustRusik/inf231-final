<template>
    <div class="flex">
        <div class="flex border-blue-500 border-2 rounded-xl divide-x-[2px] divide-gray-300">
        <button
            v-for="button in buttons"
            :key="button.id"
            @click="buttonClicked(button.id)"
            class="p-2"
        >
            {{ button.text }}
        </button>
        </div>
    </div>
</template>
  
<script>
  export default {
    props: {
      buttons: {
        type: Array,
        required: true
      }
    },
    methods: {
      buttonClicked(id) {
        console.log(id)
        this.$emit('button-click', id);
      }
    }
  };
</script>
  
  