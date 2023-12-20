<template>
    <form @submit.prevent="submitForm">
        <div v-if="name">
            <label for="name">Name</label>
            <br>
            <input class="border-blue-500 border-2 rounded-xl" type="text" id="name" v-model="formData.name" />
        </div>

        <div v-if="surname">
            <label for="surname">Surname</label>
            <br>
            <input class="border-blue-500 border-2 rounded-xl" type="text" id="surname" v-model="formData.surname" />
        </div>

        <div v-if="phone">
            <label for="phone">Phone</label>
            <br>
            <input class="border-blue-500 border-2 rounded-xl" type="tel" id="phone" v-model="formData.phone" />
        </div>

        <div v-if="email">
            <label for="email">Email</label>
            <br>
            <input class="border-blue-500 border-2 rounded-xl" type="email" id="email" v-model="formData.email" />
        </div>

        <div v-if="password">
            <label for="password">Password</label>
            <br>
            <input class="border-blue-500 border-2 rounded-xl" type="password" id="password" v-model="formData.password" />
        </div>

        <button class="bg-blue-400 py-2 px-4 text-white rounded-lg mt-4" type="submit">Send</button>
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
                    phone: '',
                    email: '',
                    password: ''
                }
            };
        },
        methods: {
            submitForm() {
                console.log(this.formData)
                this.$emit('form-submit', this.formData);
            }
        }
    };
</script>

