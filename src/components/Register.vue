<script setup lang="ts">
import axios from 'axios';
import { NButton, NSelect, NForm, NFormItem, NInput, useMessage, FormItemRule } from 'naive-ui';
import { ref } from 'vue';

const message = useMessage();

const options = ref([
    { label: 'Private seller', value: '0' },
    { label: 'Company', value: '1' },
]);

const formValue = ref({
    name: null,
    email: null,
    number: null,
    password: null,
    confirmPassword: null,
    sellerType: null,
});

const rules = ref({
    name: [
        { required: true, message: 'Please input name' },
    ],
    email: [
        { required: true, message: 'Please input email' },
    ],
    number: [
        {
            required: true,
            validator: (rule: FormItemRule, value: string) => {
                if (!value) {
                    return new Error('Number is required');
                } else if (!/^\d*$/.test(value)) {
                    return new Error('Please input number');
                } else if (value.length < 9) {
                    return new Error('Number must be at least 9 digits');
                }
                return true;
            },
            message: 'Please input number'
        },
    ],
    password: [
        { required: true, message: 'Please input password' },
    ],
    confirmPassword: [
        {
            required: true,
            valdiator: (rule, value) => {
                if (!value) {
                    return new Error('Password confirmation is required');
                } else if (value !== formValue.value.password) {
                    return new Error('Password confirmation must match password');
                }
                return true;
            },
            message: 'Please input password'
        },
    ],
    sellerType: [
        { required: true, message: 'Please select seller type' },
    ],
});

const handleValidateClick = (e: MouseEvent) => {
    e.preventDefault();
    registerUser();
}

const registerUser = () => {
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, PATCH, PUT, DELETE, OPTIONS';
    axios.post('http://localhost:3000/register', {
        username: formValue.value.name,
        email: formValue.value.email,
        password: formValue.value.password,
        number: formValue.value.number,
        userType: formValue.value.sellerType,
    }, { headers: { 'Content-Type': 'application/json' } })
        .then((response) => {
            console.log(response);
            message.success('Success');
        }, (error) => {
            console.log(error);
            message.error('Failed to register');
        });
}

</script>

<template>
    <div>
        <div class="container register-custom">

            <div class="row register-row mt-5 mb-5">
                <div class="col-12">
                    <div class="row custom-register-bg-top">
                        <div class="col-12">
                            <p class="text-center inverted-color mb-3 mt-3"><b>REGISTER NEW ACCOUNT</b></p>
                        </div>
                    </div>
                    <n-form ref="formref" size="medium" :rules="rules" :model="formValue">
                        <div class="row pt-4">
                            <div class="col-3">
                                <p>Name</p>
                            </div>
                            <div class="col-9">
                                <n-form-item class="disable-space">
                                    <n-input v-model:value="formValue.name" placeholder="Imię i nazwisko" name="name"
                                        required />
                                </n-form-item>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p>Email</p>
                            </div>
                            <div class="col-9">
                                <n-form-item class="disable-space">
                                    <n-input v-model:value="formValue.email" placeholder="Email" name="email" required />
                                </n-form-item>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p>Phone</p>
                            </div>
                            <div class="col-9">
                                <n-form-item class="disable-space">
                                    <n-input v-model:value="formValue.number" placeholder="Numer telefonu" name="phone" />
                                </n-form-item>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p>Password</p>
                            </div>
                            <div class="col">
                                <n-form-item class="disable-space">
                                    <n-input v-model:value="formValue.password" placeholder="Hasło" name="password"
                                        required />
                                </n-form-item>
                            </div>
                            <div class="col">
                                <n-form-item class="disable-space">
                                    <n-input v-model:value="formValue.confirmPassword" placeholder="Potwierdź hasło"
                                        name="confirm_password" required />
                                </n-form-item>
                            </div>
                        </div>
                        <div class="row small-row pt-4">
                            <div class="col-12">
                                <p class="text-center medium kanit">Are you a private seller or a company?</p>
                                <n-select v-model:value="formValue.sellerType" :options="options" />
                            </div>
                        </div>
                        <div class="row text-center pt-4 pb-4">
                            <div class="col-12">
                                <n-button type="primary" @click="handleValidateClick">Validate</n-button>
                            </div>
                        </div>
                    </n-form>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.register-custom {
    padding-left: 320px;
    padding-right: 320px;
}

.small-row {
    padding-right: 200px;
    padding-left: 200px;
}

.disable-space {
    grid-template-rows: auto;
}</style>