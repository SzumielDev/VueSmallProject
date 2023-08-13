<script setup lang="ts">
import { NButton, NAlert } from 'naive-ui'
import { ref } from 'vue'

const isActive = ref(false);

const handleButtonClick = () => {
    isActive.value = true;
}

</script>
<template>
    <div class="center ">
        <div class="alert-custom">
            <n-alert v-show="isActive" title="Well something went wrong :(" type="warning" closable>
                This option is not available yet!
            </n-alert>
        </div>
    </div>
    <div class="container-fluid kanit">
        <div class="row">
            <div class="col-12">
                <p class="text-center pt-4">Start selling and add your advertisement!
                    <span>
                        <n-button @click="handleButtonClick()" type="primary">
                            Sell your car!
                        </n-button>
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.alert-custom {
    position: absolute;
    top: 30px;
    width: 600px;
    z-index: 100;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}
</style>