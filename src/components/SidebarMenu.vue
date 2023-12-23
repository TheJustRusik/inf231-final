<template>
    <div class="sidebar-container" :class="{ 'is-open': isOpen }">
      <button class="toggle-button" :class="{ 'is-open': isOpen}" @click="toggleSidebar">☰</button>
      <div class="sidebar">
        <ul class="menu-list">
          <li v-for="item in menuItems" :key="item.name" class="menu-item">
            <a @click="selectItem(item.name)">
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>
  
<script>
  export default {
    props: {
      menuItems: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggleSidebar() {
        this.isOpen = !this.isOpen;
      },
      selectItem(itemName) {
        // Handle item selection
      }
    }
  };
</script>
  
<style>
  .sidebar-container {
    position: relative;
  }
  
  .toggle-button {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1000;
    cursor: pointer;
    padding: 10px;
    font-size: 20px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 3px;
    transition: left 0.3s;
  }
  .toggle-button.is-open{
    left: 250px;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: -250px;
    width: 250px;
    height: 100%;
    background-color: #333;
    overflow-x: hidden;
    transition: left 0.3s;
    z-index: 999;
  }
  
  .sidebar-container.is-open .sidebar {
    left: 0;
  }
  
  .menu-list {
    list-style-type: none;
    padding: 20px 0;
    margin: 0;
  }
  
  .menu-item {
    padding: 10px 20px;
    color: white;
    font-size: 18px;
  }
  
  .menu-item a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  
  .menu-item i {
    margin-right: 15px;
  }
  
</style>
  