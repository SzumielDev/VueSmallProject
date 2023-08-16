<script setup lang="ts">
import { NForm, NFormItem, NInput, NButton } from 'naive-ui';
import { ref } from 'vue';

const formValue = ref({
    user: {
        name: '',
        email: '',
        address: '',
        password: '',
        confirmPassword: ''
    },
    phone: '',
});

const rules = {
    user: {
        name: {
            required: true,
            message: 'Name is required',
            trigger: 'blur'
        },
        email: {
            required: true,
            message: 'Email is required',
            trigger: 'blur'
        },
        address: {
            required: true,
            message: 'Address is required',
            trigger: 'blur'
        },
        password: {
            required: true,
            message: 'Password is required',
            trigger: 'blur'
        },
        confirmPassword: {
            required: true,
            message: 'Confirm password is required',
            trigger: 'blur'
        }
    },
    phone: {
        required: true,
        message: 'Phone is required',
        trigger: ['input']
    },
}

const handleValidate = (e: MouseEvent) => {
    e.preventDefault();
    formRef.value?.validate((errors) => {
        if (!errors) {
            console.log('valid');
        } else {
            console.log('invalid');
        }
    });
}

</script>
<template>
    <div>
        <div class="container bg-custom mb-5">
            <div class="row">
                <div class="col-12">
                    <p class="text-center mt-4 mb-4">REGISTER NEW ACCOUNT</p>
                </div>
            </div>
            <div class="row register-row pt-2">
                <div class="col-12">
                    <n-form ref="formRef" :model="formValue" :rules="rules">
                        <p class="mt-0 mb-0 roboto">Name</p>
                        <n-form-item path="user.name">
                            <n-input v-model:value="formValue.user.name" placeholder="Name"></n-input>
                        </n-form-item>
                        <p class="mt-0 mb-0 roboto">Email</p>
                        <n-form-item path="user.email">
                            <n-input v-model:value="formValue.user.email" placeholder="Email"></n-input>
                        </n-form-item>
                        <p class="mt-0 mb-0 roboto">Address</p>
                        <n-form-item path="user.address">
                            <n-input v-model:value="formValue.user.address" placeholder="Address"></n-input>
                        </n-form-item>
                        <p class="mt-0 mb-0 roboto">Phone</p>
                        <n-form-item path="phone">
                            <n-input v-model:value="formValue.phone" placeholder="Phone"></n-input>
                        </n-form-item>
                        <p class="mt-0 mb-0 roboto">Password</p>
                        <n-form-item required>
                            <n-input v-model:value="formValue.user.password" placeholder="Password"></n-input>
                        </n-form-item>
                        <p class="mt-0 mb-0 roboto">Confirm Password</p>
                        <n-form-item required>
                            <n-input v-model:value="formValue.user.confirmPassword"
                                placeholder="Confirm password"></n-input>
                        </n-form-item>

                        <n-form-item v-model:value="formValue.phone">
                            <n-button type="primary" @click="handleValidate">Validate</n-button>
                        </n-form-item>

                    </n-form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.register-row {
    border: 1px solid rgba(255, 255, 255, 0.185);
    border-radius: 5px;
}

</style>