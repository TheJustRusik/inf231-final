<script setup>
    import Carousel from '../components/ImageCarousel.vue'
    import Card from '../components/Card.vue'
    import ProgressBar from '../components/ProgressBar.vue'
    import InputForm from '../components/InputForm.vue';
    import ToggleSwitch from '../components/ToggleSwitch.vue'
    import Percent from '../components/Percent.vue';
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
                <div class="flex justify-between items-center text-[#5d596c]">
                    <div>
                        <p class="text-4xl font-bold">$468</p>
                        <p class="bg-green-100 text-green-500 p-1 rounded-lg mr-36 my-2">+4.2%</p>
                        <p class="text-sm">You informed of this week compared to last week</p>
                    </div>
                    <img src="../assets/images/stat1.png" alt="" class="w-3/5">
                </div>
                <div class="border p-4 rounded-lg mb-4">
                    <div class="grid grid-cols-3 gap-6">
                        <div>
                            <div class="flex items-center">
                                <div class="flex p-1 bg-purple-300 text-purple-700 rounded-lg"><p class="mx-2">$</p></div>
                                <p>Earnings</p>
                            </div>
                            <p class="text-2xl text-[#5d596c] font-bold">$545.69</p>
                            <ProgressBar :progress="25" :color="'bg-purple-500'"></ProgressBar>
                        </div>
                        <div>
                            <div class="flex items-center">
                                <div class="flex p-1 bg-sky-300 text-sky-700 rounded-lg"><p class="mx-2">D</p></div>
                                <p>Profit</p>
                            </div>
                            <p class="text-2xl text-[#5d596c] font-bold">$256.34</p>
                            <ProgressBar :progress="55" :color="'bg-purple-500'"></ProgressBar>
                        </div>
                        <div>
                            <div class="flex items-center">
                                <div class="flex p-1 bg-red-300 text-red-700 rounded-lg"><p class="mx-2">$</p></div>
                                <p>Expense</p>
                            </div>
                            <p class="text-2xl text-[#5d596c] font-bold">$545.69</p>
                            <ProgressBar :progress="87" :color="'bg-purple-500'"></ProgressBar>
                        </div>
                    </div>
                    
                </div>
                <div class="py-2"></div>
            </Card>
        </div>
        <div>
            <Card :title="'Support Tracker'" :subtitle="'Last 7 Days'" class="col-span-2 row-span-2">
                <div class="flex justify-between text-[#5d596c]">
                    <div>
                        <p class="text-3xl font-bold">164</p>
                        <p class="text-lg">Total Tickets</p>
                        <div class="my-6">
                            <div class="flex items-center">
                                <i class="fa-solid fa-ticket p-3 bg-purple-200 text-purple-500 rounded-lg mr-4"></i>
                                <div>
                                    <p>New Tickets</p>
                                    <p class="text-sm">142</p>
                                </div>
                            </div>
                            <div class="flex items-center mt-6">
                                <i class="fa-solid fa-check p-3 bg-sky-200 text-sky-500 rounded-lg mr-4"></i>
                                <div>
                                    <p>Open Tickets</p>
                                    <p class="text-sm">28</p>
                                </div>
                            </div>
                            <div class="flex items-center mt-6">
                                <i class="fa-solid fa-clock p-3 bg-orange-200 text-orange-500 rounded-lg mr-4"></i>
                                <div>
                                    <p>Response Time</p>
                                    <p class="text-sm">1 Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <img src="../assets/images/card3.png" alt="" class="w-64">
                    </div>
                </div>
            </Card>
        </div>
    </div>
    <div class="grid grid-cols-3 gap-6">
        <Card :title="'Sales by Countries'" :subtitle="'Monthly Sales Overview'" class="text-[#5d596c]">
            <div class="flex justify-between my-1">
                <div class="flex">
                    <img src="../assets/images/us.svg" alt="" class="mr-2">
                    <div>
                        <p class="text-sm font-bold">$8,567k</p>
                        <p class="text-xs">United states</p>
                    </div>
                </div>
                <Percent :ppp="25.7"></Percent>

            </div>
            <div class="flex justify-between my-4">
                <div class="flex">
                    <img src="../assets/images/br.svg" alt="" class="mr-2">
                    <div>
                        <p class="text-sm font-bold">$2,415k</p>
                        <p class="text-xs">Brazil</p>
                    </div>
                </div>
                <Percent :ppp="-6.2"></Percent>

            </div>
            <div class="flex justify-between my-4">
                <div class="flex">
                    <img src="../assets/images/in.svg" alt="" class="mr-2">
                    <div>
                        <p class="text-sm font-bold">$865k</p>
                        <p class="text-xs">India</p>
                    </div>
                </div>
                <Percent :ppp="12.4"></Percent>

            </div>
            <div class="flex justify-between my-4">
                <div class="flex">
                    <img src="../assets/images/au.svg" alt="" class="mr-2">
                    <div>
                        <p class="text-sm font-bold">$777k</p>
                        <p class="text-xs">Australia</p>
                    </div>
                </div>
                <Percent :ppp="-11.9"></Percent>

            </div>
            <div class="flex justify-between my-4">
                <div class="flex">
                    <img src="../assets/images/fr.svg" alt="" class="mr-2">
                    <div>
                        <p class="text-sm font-bold">$45k</p>
                        <p class="text-xs">France</p>
                    </div>
                </div>
                <Percent :ppp="16.2"></Percent>

            </div>
            <div class="flex justify-between my-4">
                <div class="flex">
                    <img src="../assets/images/cn.svg" alt="" class="mr-2">
                    <div>
                        <p class="text-sm font-bold">$12k</p>
                        <p class="text-xs">China</p>
                    </div>
                </div>
                <Percent :ppp="16.2"></Percent>

            </div>

        </Card>
        <Card :title="'Total Earning'">
            <img src="../assets/images/card5.png" alt="">
        </Card>
        <Card :title="'Monthly Campaign State'" :subtitle="'8.52k Social Visiters'" class="text-[#5d596c]">
            <div class="flex justify-between my-1">
                <div class="flex items-center">
                    <img src="../assets/images/tty1.png" alt="" class="mr-2 w-[40px] h-[40px]">
                    <div>
                        <p class="text-sm font-bold">Emails</p>
                    </div>
                </div>
                <Percent :ppp="0.3"></Percent>

            </div>
            <div class="flex justify-between my-4">
                <div class="flex items-center">
                    <img src="../assets/images/tty2.png" alt="" class="mr-2 w-[40px] h-[40px]">
                    <div>
                        <p class="text-sm font-bold">Opened</p>
                    </div>
                </div>
                <Percent :ppp="2.1"></Percent>

            </div>
            <div class="flex justify-between my-4">
                <div class="flex items-center">
                    <img src="../assets/images/tty3.png" alt="" class="mr-2 w-[40px] h-[40px]">
                    <div>
                        <p class="text-sm font-bold">Clicked</p>
                    </div>
                </div>
                <Percent :ppp="1.4"></Percent>

            </div>
            <div class="flex justify-between my-4">
                <div class="flex items-center">
                    <img src="../assets/images/tty4.png" alt="" class="mr-2 w-[40px] h-[40px]">
                    <div>
                        <p class="text-sm font-bold">Subscribe</p>
                    </div>
                </div>
                <Percent :ppp="8.5"></Percent>

            </div>
            <div class="flex justify-between my-4">
                <div class="flex items-center">
                    <img src="../assets/images/tty5.png" alt="" class="mr-2 w-[40px] h-[40px]">
                    <div>
                        <p class="text-sm font-bold">Complaints</p>
                    </div>
                </div>
                <Percent :ppp="1.5"></Percent>

            </div>
            <div class="flex justify-between my-4">
                <div class="flex items-center">
                    <img src="../assets/images/tty6.png" alt="" class="mr-2 w-[40px] h-[40px]">
                    <div>
                        <p class="text-sm font-bold">Unsubscribe</p>
                    </div>
                </div>
                <Percent :ppp="0.8"></Percent>

            </div>



        </Card>
        <Card :title="'Source Visits'" :subtitle="'38.4k Visitors'" class="text-[#5d596c]">
            <div class="flex justify-between my-1 items-center">
                <div class="flex items-center">
                    <img src="../assets/images/b1.png" alt="" class="mr-2 w-[40px] h-[40px]">
                    <div>
                        <p class="text-sm font-bold">Direct Source</p>
                    </div>
                </div>
                <div class="flex gap-6">
                    <p>1.2k</p>
                <Percent :ppp="0.8"></Percent>
                </div>

            </div>
            <div class="flex justify-between my-4 items-center">
                <div class="flex items-center">
                    <img src="../assets/images/b2.png" alt="" class="mr-2 w-[40px] h-[40px]">
                    <div>
                        <p class="text-sm font-bold">Social Network</p>
                    </div>
                </div>
                <div class="flex gap-6">
                    <p>41.5k</p>
                <Percent :ppp="1.8"></Percent>
                </div>

            </div>
            <div class="flex justify-between my-4 items-center">
                <div class="flex items-center">
                    <img src="../assets/images/b3.png" alt="" class="mr-2 w-[40px] h-[40px]">
                    <div>
                        <p class="text-sm font-bold">Email Newsletter</p>
                    </div>
                </div>
                <div class="flex gap-6">
                    <p>12.5k</p>
                <Percent :ppp="0.6"></Percent>
                </div>

            </div>
            <div class="flex justify-between my-4 items-center">
                <div class="flex items-center">
                    <img src="../assets/images/b4.png" alt="" class="mr-2 w-[40px] h-[40px]">
                    <div>
                        <p class="text-sm font-bold">Referrals</p>
                    </div>
                </div>
                <div class="flex gap-6">
                    <p>12.5k</p>
                <Percent :ppp="0.4"></Percent>
                </div>

            </div>
            <div class="flex justify-between my-4 items-center">
                <div class="flex items-center">
                    <img src="../assets/images/b5.png" alt="" class="mr-2 w-[40px] h-[40px]">
                    <div>
                        <p class="text-sm font-bold">ADVT</p>
                    </div>
                </div>
                <div class="flex gap-6">
                    <p>12.5k</p>
                <Percent :ppp="0.4"></Percent>
                </div>

            </div>
            <div class="flex justify-between my-4 items-center">
                <div class="flex items-center">
                    <img src="../assets/images/b6.png" alt="" class="mr-2 w-[40px] h-[40px]">
                    <div>
                        <p class="text-sm font-bold">Other</p>
                    </div>
                </div>
                <div class="flex gap-6">
                    <p>12.5k</p>
                <Percent :ppp="0.8"></Percent>
                </div>
                

            </div>
        </Card>
        <Card class="col-span-2">
            <div class="divide-y">
                <div class="flex justify-between text-[#5d596c] items-center">
                    <p class="font-bold text-3xl">Projects</p>
                    <div class="flex items-center">
                        <p class="mr-4">Search:</p>
                        <InputForm :type="'text'" :placeholder="''"></InputForm>
                    </div>
                </div>
                <div class="flex text-xl text-[#5d596c] justify-between mt-3">
                    <InputForm :type="'checkbox'"/>
                    <p>NAME</p>
                    <p>LEADER</p>
                    <p>TEAM</p>
                    <p>STATUS</p>   
                </div>
                <div>
                    <p class="text-center text-xl m-4  text-[#5d596c]">No matching records found</p>
                </div>
        
            </div>
        </Card>
    </div>
   
</template>
