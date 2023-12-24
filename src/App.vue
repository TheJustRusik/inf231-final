<script setup>
    import { RouterLink, RouterView } from 'vue-router';
    import { ref } from 'vue';

    import SignUpPage from './views/SignUp.vue';
    import SidebarMenu from './components/SidebarMenu.vue'
    import SearchBar from './components/SearchBar.vue'
import { icon } from '@fortawesome/fontawesome-svg-core';

    let isReg = ref(true)

</script>

<template>  
    <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/users">About</RouterLink>
    </nav>
    <RouterView/> -->
    <SignUpPage v-if="isReg" @signal="isReg = false"></SignUpPage>
    <div v-else>
        <SidebarMenu :menuItems="[{name:'lol', icon:'fa-user'},{name:'lol', icon:'fa-user'},{name:'lol', icon:'fa-user'},{name:'lol', icon:'fa-user'},{name:'lol', icon:'fa-user'}]"></SidebarMenu>
        <SearchBar class="fixed"></SearchBar>
        <div class="bg-red-500">
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
            <p class="text-8xl">1111111</p>
        </div>
    </div>
</template>
