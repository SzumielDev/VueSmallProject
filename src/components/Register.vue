<script setup lang="ts">
import axios from 'axios';
import {
    NButton, NSelect, NForm, NFormItem, NInput, useMessage,
    type FormItemRule, type FormInst, type FormItemInst, type FormValidationError, NCheckbox
} from 'naive-ui';
import { ref } from 'vue';

interface ModelType {
    name: string | null,
    email: string | null,
    number: number | null,
    password: string | null,
    reenteredPassword: string | null,
    sellerType: string | null,
    terms: boolean,
}

const message = useMessage();
const formRef = ref<FormInst | null>(null);
const rPasswordFormItemRef = ref<FormItemInst | null>(null);

const options = ref([
    { label: 'Private seller', value: '0' },
    { label: 'Company', value: '1' },
]);

const formValue = ref<ModelType>({
    name: null,
    email: null,
    number: null,
    password: null,
    reenteredPassword: null,
    sellerType: null,
    terms: false,
});

const rules = ref({
    name: [
        {
            required: true,
            validator: (rule: FormItemRule, value: string) => {
                if (!value) {
                    return new Error('Please input name');
                }
                if (value.length < 3 || value.length > 20 || !/^[a-zA-Z0-9]+$/.test(value)) {
                    return new Error('Name must be at least 3 characters and at most 20 characters long and can only contain letters and numbers');
                }
                return true;
            },
            message: 'Please input name'
        },
    ],
    email: [
        { required: true, message: 'Please input email' },
    ],
    number: [
        {
            required: true,
            validator: (rule: FormItemRule, value: number) => {
                if (!value) {
                    return new Error('Number is required');
                } else if (!/^\d*$/.test(value)) {
                    return new Error('Please input number');
                } else if (value.length < 9) {
                    return new Error('Number must be at least 9 digits');
                }
                return true;
            },
            message: 'Please input number',
            trigger: ['input'],
        },
    ],
    password: [
        { required: true, message: 'Please input password' },
    ],
    reenteredPassword: [
        {
            required: true,
            message: 'Please re-enter your password',
            trigger: ['input', 'blur']
        },
        {
            validator: (rule: FormItemRule, value: string): boolean => {
                return !!formValue.value.password && formValue.value.password.startsWith(value);
            },
            message: 'Password is not the same as re-entered password',
            trigger: 'input'
        },
        {
            validator: (rule: FormItemRule, value: string): boolean => {
                return value === formValue.value.password;
            },
            message: 'Password is not the same as re-entered password',
            trigger: ['blur', 'password-input']
        }
    ],
    sellerType: [
        { required: true, message: 'Please select seller type' },
    ],
    terms: [
        {
            required: true,
            validator: (_rule: FormItemRule, value: boolean) => {
                if (value === false) {
                    return new Error('Please accept terms and conditions');
                }
                return true;
            },
            message: 'Please accept terms and conditions'
        },
    ],
});


const handlePasswordInput = () => {
    if (formValue.value.reenteredPassword) {
        rPasswordFormItemRef.value?.validate({ trigger: 'password-input' });
    }
}

const handleValidateClick = (e: MouseEvent) => {
    console.log(formValue.value.terms)
    e.preventDefault();
    formRef.value?.validate((errors: Array<FormValidationError> | undefined) => {
        if (!errors) {
            registerUser();
        }
    });
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
                <div class="col-4">
                    <div class="row h-100 gradient radius-left">
                        <div class="col-12 text-center v-center">
                            <p class="big monsterrat">WELCOME BACK!</p>
                            <p class="monsterrat small mb-0">To keep connected with Your offers</p>
                            <p class="monsterrat small">please sign in</p>
                            <div class="text-center">
                                <n-button dashed focusable round strong type="primary">
                                    SIGN IN
                                </n-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-12">
                            <p class="text-center inverted-color mb-3 mt-3 monsterrat big">CREATE NEW ACCOUNT</p>
                        </div>
                    </div>
                    <n-form ref="formRef" size="medium" :rules="rules" :model="formValue">
                        <div class="row pt-4">
                            <div class="col-3">
                                <p>Name <span class="text-danger">*</span></p>
                            </div>
                            <div class="col-9">
                                <n-form-item class="disable-space" path="name">
                                    <n-input v-model:value="formValue.name" placeholder="Name" name="name" required />
                                </n-form-item>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p>Email <span class="text-danger">*</span></p>
                            </div>
                            <div class="col-9">
                                <n-form-item class="disable-space" path="email">
                                    <n-input v-model:value="formValue.email" placeholder="Email" name="email" required />
                                </n-form-item>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p>Phone <span class="text-danger">*</span></p>
                            </div>
                            <div class="col-9">
                                <n-form-item class="disable-space" path="number">
                                    <n-input v-model:value="formValue.number" placeholder="Phone number" name="phone" />
                                </n-form-item>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <p>Password <span class="text-danger">*</span></p>
                            </div>
                            <div class="col">
                                <n-form-item class="disable-space" path="password">
                                    <n-input v-model:value="formValue.password" type="password" placeholder="Password"
                                        name="password" required @input="handlePasswordInput" @keydown.enter.prevent />
                                </n-form-item>
                            </div>
                            <div class="col">
                                <n-form-item ref="rPasswordFormItemRef" first class="disable-space"
                                    path="reenteredPassword">
                                    <n-input v-model:value="formValue.reenteredPassword" :disabled="!formValue.password"
                                        type="password" placeholder="Confirm password" name="confirm_password"
                                        @keydown.enter.prevent required />
                                </n-form-item>
                            </div>
                        </div>
                        <div class="row small-row pt-4">
                            <div class="col-12">
                                <p class="text-center medium kanit">Are you a private seller or a company? <span
                                        class="text-danger">*</span></p>
                                <n-form-item class="disable-space" path="sellerType">
                                    <n-select v-model:value="formValue.sellerType" :options="options" />
                                </n-form-item>
                            </div>
                        </div>
                        <div class="row pt-2">
                            <div class="col-12">
                                <n-form-item class="disable-space v-center" path="terms">
                                    <n-checkbox v-model:checked="formValue.terms" name="terms" required>
                                        <p>I agree to the <a href="#">terms and conditions</a> <span
                                                class="text-danger">*</span></p>
                                    </n-checkbox>
                                </n-form-item>
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
    padding-left: 300px;
    padding-right: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 100px);
    max-height:100vh;
}

.v-center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.gradient {
    background: rgb(18, 26, 51);
    background: linear-gradient(166deg, rgba(18, 26, 51, 1) 0%, rgba(49, 77, 156, 1) 50%, rgba(5, 26, 69, 1) 100%);
}

.small-row {
    padding-right: 100px;
    padding-left: 100px;
}

.disable-space {
    grid-template-rows: auto;
}

.radius-left {
    border-radius: 10px 0px 0px 10px;
}

.radius-right {
    border-radius: 0px 10px 10px 0px;
}

@media (max-width: 1399px) {
    .register-custom {
        padding-left: 200px;
        padding-right: 200px;
    }

    .small-row {
        padding-right: 0px;
        padding-left: 0px;
    }
}
</style>