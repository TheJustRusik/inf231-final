<script setup>
    import SignForm from '../components/Forms.vue'
</script>

<template>  
    <div class="flex bg-white p-8 h-screen">
        <div class="bg-[#f8f7fa] rounded-3xl w-[60%] h-full flex items-center   ">
            <img src="../assets/images/auth-register-illustration-light.png" alt="" class="w-1/2 mx-auto">
        </div>
        <div class="w-[40%] h-full flex items-center">
            <div class="mx-auto">
                <img src="../assets/icons/logo.svg" alt="" class="pb-6">
                <h1 class="text-[#5d596c] text-3xl pb-1">Adventure starts here 🚀</h1>
                <p class="text-[#5d596c] pb-6">Make your app management easy and fun!</p>
                <SignForm :name="false" :surname="false" :phone="false" @form-submit="$emit('signal')"></SignForm>
            </div>
        </div>
    </div>


</template>
