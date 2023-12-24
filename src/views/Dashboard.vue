<script setup>
    import Carousel from '../components/ImageCarousel.vue'
    import Card from '../components/Card.vue'
</script>

<template>  
    <div class="pb-24"></div>
    <div class="grid grid-cols-4 grid-flow-col gap-6">
        <Carousel class="col-span-2" :images="['../src/assets/images/card-website-analytics-1.png','../src/assets/images/card-website-analytics-2.png','../src/assets/images/card-website-analytics-3.png']"></Carousel>
        <img src="../assets/images/card1.png" alt="" class="rounded-lg shadow-lg">
        <img src="../assets/images/card2.png" alt="" class="rounded-lg shadow-lg">
    </div>
    <div class="grid grid-cols-2 gap-6">
        <div>
            <Card :title="'Earning Reports'" :subtitle="'Weekly Earnings Overview'" class="col-span-2 row-span-2">
                <div class="flex justify-between items-center">
                    <div>
                        <p>$468</p>
                        <p>+4.2%</p>
                        <p>You informed of this week compared to last week</p>
                    </div>
                    <img src="../assets/images/stat1.png" alt="" class="w-3/5">
                </div>
            </Card>
        </div>
        <div>
            <Card :title="'Support Tracker'" :subtitle="'Last 7 Days'" class="col-span-2 row-span-2">

            </Card>
        </div>
    </div>

   
</template>
