<script setup>
    import '../assets/base.css';
    import Box from '../components/Box.vue';
    import Button from '../components/Button.vue';
    import Select from '../components/SelectForm.vue';
    import InputForm from '../components/InputForm.vue';
    import Table from '../components/Table.vue';
    import {ref} from 'vue';

    let tableData = ref([
        {
            "Name": "John Doe",
            "Age": 30,
            "Country": "USA"
        },
        {
            "Name": "Jane Smith",
            "Age": 25,
            "Country": "Canada"
        },
        {
            "Name": "Sara Williams",
            "Age": 27,
            "Country": "UK"
        }
    ])
</script>

<template>  
    <div>
        <div class="pb-24"></div>
        <div class=" grid grid-cols-4 gap-6">
            <Box :title="'Session'" :number="'21,459'" :percent="29" :info="'Total Users'" :png="1"></Box>
            <Box :title="'Paid Users'" :number="'4,567'" :percent="18" :info="'Last week analytics'" :png="2"></Box>
            <Box :title="'Active Users'" :number="'19,860'" :percent="-14" :info="'Last week analytics'" :png="3"></Box>
            <Box :title="'Pending Users'" :number="'237'" :percent="42" :info="'Last week analytics'" :png="4"></Box>
        </div>
        <div class="bg-white rounded-lg shadow-lg mt-6">
            <p class="text-[#5d596c] font-semibold text-2xl mx-6 pt-4 mb-4">Search Filter</p>
            <div class="grid grid-cols-3 gap-6 mx-6 mb-4 border-b-1 border-gray-300">
                <Select :placeholder="'Select Role'"></Select>
                <Select :placeholder="'Select Plan'"></Select>
                <Select :placeholder="'Select Status'"></Select>
            </div>
            <div class="border-y border-gray-300  ">
                <div class="flex justify-between mx-6 py-4 items-center">
                    <Select :placeholder="10"></Select>
                    <div class="flex gap-4 items-center">
                        <InputForm :type="'text'" :placeholder="'Search...'"></InputForm>
                        <Button :icon="'fa-solid fa-desktop'" :buttonText="'Export'"></Button>
                        <Button prim :icon="'fa-solid fa-plus'" :buttonText="'Add New User'"></Button>
                    </div>
                </div>
                
            </div>
            <Table :cols="['USER','ROLE','PLAN','BILLING','STATUS','ACTIONS']"></Table>
        </div>
    </div>
</template>
