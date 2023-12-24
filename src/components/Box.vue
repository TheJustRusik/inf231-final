<template>
    <div class="flex bg-white rounded-lg shadow-lg justify-between">
        <div class="ml-6 mt-6">
            <p class="text-[#5d596c] text-sm font-semibold">{{ title }}</p>
            <div class="flex items-center py-2">
                <p class="text-[#5d596c] font-semibold text-3xl mr-3">{{ number }}</p>
                <p v-if="percent > 0" class="text-green-500 font-semibold">(+{{percent}}%)</p>
                <p v-else class="text-red-500 font-semibold">({{percent}}%)</p>
            </div>
            <p class="text-[#5d596c] font-semibold mb-6">{{ info }}</p>
        </div>
        <div v-if="png == 1" class="rounded-lg bg-purple-200 w-[40px] h-[40px] flex justify-center mr-6 mt-6">
            <i class="fa-solid fa-user text-center my-auto text-purple-700"></i>
        </div>
        <div v-else-if="png ==2" class="rounded-lg bg-red-200 w-[40px] h-[40px] flex justify-center mr-6 mt-6">
            <i class="fa-solid fa-user-plus text-center my-auto text-red-700"></i>
        </div>
        <div v-else-if="png ==3" class="rounded-lg bg-green-200 w-[40px] h-[40px] flex justify-center mr-6 mt-6">
            <i class="fa-solid fa-user-check text-center my-auto text-green-700"></i>
        </div>
        <div v-else class="rounded-lg bg-yellow-200 w-[40px] h-[40px] flex justify-center mr-6 mt-6">
            <i class="fa-solid fa-user-xmark text-center my-auto text-yellow-700"></i>
        </div>
    </div>

</template>

<script>
    export default{
        props: {
            title: {
                type: String,
                required: true
            },
            number: {
                type: String,
                required: true
            },
            percent: {
                type: Number,
                required: true
            },
            info: {
                type: String,
            },
            png: {
                type: Number,
                default: 1
            }

        }
    }

</script>