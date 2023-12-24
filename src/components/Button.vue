<template>
    <div class="bg-white button-container my-1">
      <button @click="buttonClicked" class=" collapse-button w-full rounded-lg" :class="{'bg-[#6b60df]':prim}">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <i class="ml-1 text-[#5d596c]"  :class="icon, {'text-white':prim}"></i>
            <p class="ml-2 text-[#5d596c] font-semibold" :class="{'text-white':prim}">{{ buttonText }}</p>
          </div>
        </div>
        </button>
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
      prim: {
        type: Boolean,
        default: false
      },
      buttonText: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        default: 'fa-regular fa-circle text-xs'
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
  