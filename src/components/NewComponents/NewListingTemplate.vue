<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(["car", "columns"]);

const carInfo = props.car;

</script>
<template>
    <div :class="props.columns + ` pt-2`">
        <div class="background text-center pointer">
            <router-link class="text-decoration-none" :to="`/object/` + carInfo.id">      
                <img :src="`src/assets/images/` + carInfo.image" alt="tesla" class="img-fluid">
                <p class="mb-0">{{ carInfo.company }} {{ carInfo.model }}</p>
                <p class="small mb-0">
                    <b>{{ carInfo.year }}</b> /
                    {{ carInfo.mileage }}km /
                    Fuel: <b>{{ carInfo.fuel.toUpperCase() }}</b>
                </p>
                <p class="text-danger mb-0 pb-2"><b>{{ carInfo.price.toLocaleString() }} PLN</b></p>
            </router-link>
        </div>
    </div>
</template>

<style scoped>

.background {
    background-color: #72727200;
    box-shadow: 0px 0px 1px 0px #b6b6b6;
    font-family: 'Kanit', sans-serif;
    transition: 0.3s;
}

.background:hover {
    box-shadow: 0px 0px 3px 0px #4b4b4b;
}
</style>