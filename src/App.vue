<script setup>
    import './assets/base.css'
    import { RouterLink, RouterView } from 'vue-router';
    import { ref } from 'vue';

    import SignUpPage from './views/SignUp.vue';
    import SidebarMenu from './components/SidebarMenu.vue';
    import SearchBar from './components/SearchBar.vue';
    import Collapse from './components/Collapse.vue';
    import Button from './components/Button.vue';
    import { icon } from '@fortawesome/fontawesome-svg-core';


    let isReg = ref(true)
    let c1 = ref(false)
    let c2 = ref(false)
    let c0 = ref(false)
    
</script>

<template>  
    <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/users">About</RouterLink>
    </nav>
    <RouterView/> -->
    <SignUpPage v-if="isReg" @signal="isReg = false"></SignUpPage>
    <div v-else class="bg-[#f8f7fa] h-full">
        
        <SidebarMenu>
            <Collapse @click="c1=false; c0=true; c2=false" :prim="c0" :icon="'fa-solid fa-envelope-open'" :title="'Dashboard'">
                <Button :prim="true" :buttonText="'Analytics'" @click="$router.push('/')"></Button>
                <Button :buttonText="'CRM'"></Button>
                <Button :buttonText="'eCommerce'"></Button>
                <Button :buttonText="'Logistics'"></Button>
                <Button :buttonText="'Academy'"></Button>
            </Collapse>
            <Collapse  @click="c1=true; c0=false; c2=false" :prim="c1" :icon="'fa-solid fa-layer-group'" :title="'Layouts'">
                <Button :buttonText="'Collapsed menu'"></Button>
                <Button :buttonText="'Content navbar'"></Button>
                <Button :buttonText="'Content nav + Sidebar'"></Button>
                <Button :buttonText="'Horizontal'"></Button>
                <Button :buttonText="'Without menu'"></Button>
            </Collapse>
            <Collapse @click="c1=false; c0=false; c2=true" :prim="c2" :icon="'fa-solid fa-file-lines'" :title="'Front Pages'">
                <Button :buttonText="'Landing'"></Button>
                <Button :buttonText="'Pricing'"></Button>
                <Button :buttonText="'Payment'"></Button>
                <Button :buttonText="'Checkout'"></Button>
                <Button :buttonText="'Help Center'"></Button>
            </Collapse>
            <p class="text-md text-gray-400">APPS & PAGES</p>
            <Button :icon="'fa-solid fa-envelope'" :buttonText="'Email'"></Button>
            <Button :icon="'fa-regular fa-comment-dots'" :buttonText="'Chat'"></Button>
            <Button :icon="'fa-solid fa-calendar-days'" :buttonText="'Calendar'"></Button>
            <Button :icon="'fa-solid fa-cart-shopping'" :buttonText="'eCommerce'"></Button>
            <Button :icon="'fa-solid fa-book'" :buttonText="'Academy'"></Button>
            <Button :icon="'fa-solid fa-truck-moving'" :buttonText="'Logistics'"></Button>
            <Button :icon="'fa-solid fa-dollar-sign'" :buttonText="'Invoice'"></Button>
            <Collapse :icon="'fa-solid fa-user'" :title="'Users'">
                <Button :buttonText="'List'" @button-click="$router.push('/users/list');" :prim="true"></Button>
                <Button :buttonText="'View'"></Button>
            </Collapse>
            <Button :icon="'fa-solid fa-gear'" :buttonText="'Roles & Permissions'"></Button>
            <Button :icon="'fa-solid fa-file'" :buttonText="'Pages'"></Button>
            <Button :icon="'fa-solid fa-lock'" :buttonText="'Authentications'"></Button>
            <Button :icon="'fa-solid fa-wand-magic-sparkles'" :buttonText="'Wizard Examples'"></Button>
            <Button :icon="'fa-solid fa-square'" :buttonText="'Modal Examples'"></Button>
            <p class="text-md text-gray-400">COMPONENTS</p>
            <Button :icon="'fa-solid fa-address-card'" :buttonText="'Card'"></Button>
            <Button :icon="'fa-solid fa-swatchbook  '" :buttonText="'User interface'"></Button>
            <Button :icon="'fa-solid fa-wand-magic-sparkles'" :buttonText="'Extended UI'"></Button>
            <Button :icon="'fa-solid fa-terminal'" :buttonText="'Icons'"></Button>
        </SidebarMenu>
        <SearchBar class="mt-4 ml-[20%]"></SearchBar>
        <!-- <SearchBar class="fixed"></SearchBar> -->
        <div class="ml-[20%] mr-[7%]">
            
            
            <RouterView/>
        </div>
    </div>
</template>
