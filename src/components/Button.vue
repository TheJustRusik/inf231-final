<template>
    <div class="button-container">
      <button @click="buttonClicked" class="bg-blue-400 p-2 text-white rounded-lg">{{ buttonText }}</button>
      <div v-if="isDropdown && options.length" class="dropdown-content">
        <ul>
          <li v-for="(option, index) in options" :key="index" @click="optionClicked(option)">
            {{ option }}
          </li>
        </ul>
      </div>
    </div>
</template>
  
<script>
  export default {
    props: {
      buttonText: {
        type: String,
        required: true
      },
      isDropdown: {
        type: Boolean,
        default: false
      },
      options: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      buttonClicked() {
        this.$emit('button-click');
        if (!this.isDropdown) {
            console.log("Clicked regular button")
        }
      },
      optionClicked(option) {
        this.$emit('option-click', option);
        console.log("Clicked" + option)
      }
    }
  };
</script>
  
<style>
  .button-container {
    position: relative;
    display: inline-block;
  }
  
  .button-container button {
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
  }
  
  .button-container:hover .dropdown-content {
    display: block;
  }
  
  .dropdown-content ul {
    list-style: none;
    padding: 0;
  }
  
  .dropdown-content li {
    cursor: pointer;
  }
  
  .dropdown-content li:hover {
  }
</style>
  