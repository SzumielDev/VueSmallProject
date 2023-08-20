<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { NSelect, NSpace } from 'naive-ui';
import HeaderDisplay from './constantComponents/HeaderDisplay.vue';
import NewAnnouncementPattern from './NewComponents/NewListingTemplate.vue';
import useCars from '@/composables/useCars';

const {cars, fetchCarData, featuredCars, fetchFeaturedCarsData } = useCars();
fetchCarData();
fetchFeaturedCarsData();

const sliceDataByTopThree = computed(()=>featuredCars.value.slice(0,3));
const sliceRestOfData = computed(()=>cars.value.filter((car: any) => car.featured === false));
const sortingKey = ref<string| null>(null);

watch(sortingKey, () => {
    fetchCarData(sortingKey.value);
    fetchFeaturedCarsData(sortingKey.value);
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
                    <div class="select-custom">
                        <n-space vertical>
                            <n-select v-model:value="sortingKey" :options="options" placeholder="Sort by:" />
                        </n-space>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-xxl bg-custom">
            <TransitionGroup name="list" tag="div" class="row">
                <NewAnnouncementPattern :key="car.id" :columns="'col-4'" :car="car" v-for="car in sliceDataByTopThree" />
            </TransitionGroup>
            <TransitionGroup name="list" tag="div" class="row">
                <NewAnnouncementPattern :key="car.id" :columns="'col-3'" :car="car" v-for="car in sliceRestOfData" />
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
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}
</style>