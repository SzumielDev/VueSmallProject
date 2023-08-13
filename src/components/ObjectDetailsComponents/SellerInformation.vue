<script setup lang="ts">
import { NButton } from "naive-ui";
import { ref } from "vue";

const props = defineProps(["accountName", "number", "veryfied", "veryfiedColor"]);


const isShowNumberButtonActive = ref(true);
const isNumberButtonActive = ref(false);
const isAlertActive = ref(false);
const activeNumber = () => {
    isShowNumberButtonActive.value = false;
    setTimeout(() => {
        isNumberButtonActive.value = true;
    }, 300);
    isAlertActive.value = true;
}

</script>
<template>
    <div class="row">
        <div class="col-12">
            <p class="kanit h5 pt-3"><b>Seller information</b></p>
            <div class="row">
                <div class="col-4">
                    <p class="h6">{{ props.accountName }}</p>
                    <p class="h6">Individual seller</p>
                </div>
                <div class="col-4">
                    <p :class="'h6 ' + props.veryfiedColor">Account {{ props.veryfied }}</p>
                </div>
                <div class="col-4">
                    <n-button class="w-100 mb-2" color="#DC143C">
                        Send message to seller
                    </n-button>
                    <transition name="slide-fade">
                        <n-button v-if="isShowNumberButtonActive === true" @click="activeNumber" ghost class="w-100 mb-2"
                            color="#1E90FF">
                            Show me phone number
                        </n-button>
                    </transition>
                    <transition name="slide-fade">
                        <n-button v-if="isNumberButtonActive === true" ghost class="w-100 mb-2" color="#228B22">
                            {{ props.number }}
                        </n-button>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>