<script setup>
    import Icon from './components/Icon.vue'
    import Button from './components/Button.vue'
    import Box from './components/Box.vue'

</script>

<template>
    <div class="flex justify-center">
        <Box>
            <Icon icontype='1' w='10' h='10'/>
            <p class="text-5xl font-extrabold m-2">Tree forse smth</p>
            <p class="m-2 text-xl font-semibold">Bla bla bla text</p>
        </Box>
        <Box>
            <Button msg="Hellow"><img src="./assets/icons/home-svgrepo-com.svg" alt="" class="w-6"></Button>
            <Button msg="Lalka"></Button>
        </Box>
    </div>
</template>
