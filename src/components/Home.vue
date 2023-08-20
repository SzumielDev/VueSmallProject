<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { NSelect, NSpace } from 'naive-ui';
import HeaderDisplay from './constantComponents/HeaderDisplay.vue';
import HomeAnnouncementPattern from './HomeComponents/HomeListingTemplate.vue';
import useCars from "@/composables/useCars";

const {cars, fetchCarData} = useCars();
fetchCarData();

const sortingKey = ref<string| null>(null);
const dataApiArray = computed (() => JSON.parse(JSON.stringify(cars.value)));

watch(sortingKey, () => {
    fetchCarData(sortingKey.value);
});

const options = [
    {
        label: "None",
        value: null,
        disabled: false
    },
    {
        label: "Price: Low to High",
        value: "price-Asc"
    },
    {
        label: "Price: High to Low",
        value: "price-Desc"
    },
    {
        label: "Year: Low to High",
        value: "year-Asc"
    },
    {
        label: "Year: High to Low",
        value: "year-Desc"
    }
];

</script>
<template>
    <div>
        <HeaderDisplay />
        <div class="container-xxl bg-custom">
            <div class="row">
                <div class="col">
                    <n-space vertical>
                        <n-select class="select-custom" v-model:value="sortingKey" :options="options"
                            placeholder="Sort by:" />
                    </n-space>
                </div>
            </div>
        </div>
        <div class="container-xxl bg-custom pt-1">
            <TransitionGroup name="list" tag="div" class="row">
                <HomeAnnouncementPattern :key="car.id" :columns="'col-12'" :currentItem="car" v-for="car in dataApiArray" />
            </TransitionGroup>
        </div>
    </div>
</template>

<style scoped>

.select-custom {
    width: 200px;
    float: right;
}

.list-move,
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.list-leave-active {
    position: absolute;
}
</style>