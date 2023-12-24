<template>
    <form @submit.prevent="submitForm">
        <div v-if="name" class="pb-2">
            <label for="name" class="text-sm text-gray-600">Name</label>
            <br>
            <input class="border-[#5d596c] border rounded w-full py-2 pl-4" type="text" id="name" v-model="formData.name" placeholder="Name"/>
        </div>

        <div v-if="surname" class="pb-2">
            <label for="surname" class="text-sm text-gray-600">Surname</label>
            <br>
            <input class="border-[#5d596c] border rounded w-full py-2 pl-4" type="text" id="surname" v-model="formData.surname" placeholder="Surname"/>
        </div>

        <div v-if="username" class="pb-2">
            <label for="username" class="text-sm text-gray-600">Username</label>
            <br>
            <input class="border-[#5d596c] border rounded w-full py-2 pl-4" type="text" id="username" v-model="formData.username" placeholder="Enter your username"/>
        </div>

        <div v-if="phone" class="pb-2">
            <label for="phone" class="text-sm text-gray-600">Phone</label>
            <br>
            <input class="border-[#5d596c] border rounded w-full py-2 pl-4" type="tel" id="phone" v-model="formData.phone" placeholder="Enter your phone"/>
        </div>

        <div v-if="email" class="pb-2">
            <label for="email" class="text-sm text-gray-600">Email</label>
            <br>
            <input class="border-[#5d596c] border rounded w-full py-2 pl-4" type="email" id="email" v-model="formData.email" placeholder="Enter your email" />
        </div>

        <div v-if="password" class="pb-2">
            <label for="password" class="text-sm text-gray-600">Password</label>
            <br>
            <input class="border-[#5d596c] border rounded w-full py-2 pl-4" type="password" id="password" v-model="formData.password" placeholder="············"/>
        </div>
        <div class="flex items-center">
            <input type="checkbox" name="" id="" class="mr-2">
            <p class="text-[#5d596c]">I agree to <span class="text-[#7367ef]">privacy policy & terms</span></p>
        </div>
        <button class="w-full bg-[#7367ef] py-2 px-4 text-white font-bold rounded-lg mt-4 mb-4" type="submit">Sign Up</button>
        <p class="text-[#5d596c]">Already have an account? <span class="text-[#7367ef]">Sign in instead</span></p>
        <div class="flex items-center justify-center my-6">
            <div class="border-t border-gray-300 flex-grow mr-3"></div>
            <div class="text-[#5d596c] text-xs">or</div>
            <div class="border-t border-gray-300 flex-grow ml-3"></div>
        </div>

        <div class="flex justify-center gap-4">
          <a href="" class="rounded-lg bg-blue-100  w-[40px] flex items-center justify-center">
            <i class="fa-brands fa-facebook-f text-2xl p-2 text-blue-500" style=""></i>
          </a>
          <a href="" class="rounded-lg bg-red-100  w-[40px] flex items-center justify-center" >
            <i class="fa-brands fa-google text-2xl p-2 text-red-500"></i>
          </a>
          <a href="" class="rounded-lg bg-sky-100  w-[40px] flex items-center justify-center" >
            <i class="fa-brands fa-twitter text-2xl p-2 text-sky-500"></i>
          </a>
        </div>

    </form>
</template>

<script>
    
    export default {
        props: {
            name: {
                type: Boolean,
                default: true
            },
            surname: {
                type: Boolean,
                default: true
            },
            username: {
                type: Boolean,
                default: true
            },
            phone: {
                type: Boolean,
                default: true
            },
            email: {
                type: Boolean,
                default: true
            },
            password: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                formData: {
                    name: '',
                    surname: '',
                    username: '',
                    phone: '',
                    email: '',
                    password: ''
                }
            };
        },
        methods: {
            submitForm() {
                this.$emit('form-submit', this.formData);
            },
        }
    };
</script>

