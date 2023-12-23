<template>
    <div class="tooltip-container" @mouseenter="showTooltip" @mouseleave="hideTooltip">
      <slot></slot>
      <div v-if="isVisible" class="tooltip-content" :style="tooltipStyle">
        {{ content }}
      </div>
    </div>
</template>
  
<script>
  export default {
    props: {
      content: {
        type: String,
        required: true
      },
      position: {
        type: String,
        default: 'top' // Может быть 'top', 'right', 'bottom' или 'left'
      }
    },
    data() {
      return {
        isVisible: false
      };
    },
    computed: {
      tooltipStyle() {
        switch (this.position) {
          case 'top':
            return { bottom: '100%', left: '50%', transform: 'translateX(-50%)' };
          case 'right':
            return { left: '100%', top: '50%', transform: 'translateY(-50%)' };
          case 'bottom':
            return { top: '100%', left: '50%', transform: 'translateX(-50%)' };
          case 'left':
            return { right: '100%', top: '50%', transform: 'translateY(-50%)' };
          default:
            return {};
        }
      }
    },
    methods: {
      showTooltip() {
        this.isVisible = true;
      },
      hideTooltip() {
        this.isVisible = false;
      }
    }
  };
</script>
  
<style>
  .tooltip-container {
    position: relative;
    display: inline-block;
  }
  
  .tooltip-content {
    position: absolute;
    z-index: 100;
    padding: 5px 10px;
    background-color: black;
    color: white;
    border-radius: 4px;
    white-space: nowrap;
  }
</style>
  