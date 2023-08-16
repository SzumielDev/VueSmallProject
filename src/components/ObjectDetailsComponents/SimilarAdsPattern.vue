<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps(["col", "company", "model", "year", "price", "image", "fuel", "mileage", "id"]);

</script>
<template>
    <div :class="props.col + ' custom-column text-center mb-2 radius'">
        <router-link class="text-decoration-none" :to="`/object/` + props.id">
            <img :src="`../src/assets/images/` + props.image" alt="tesla" class="img-fluid radius">
            <p class="text-danger mb-0 pt-1 pb-1"><b>{{ props.price.toLocaleString() }} PLN</b></p>
            <p class="mb-0">{{ props.company }}</p>
            <p class="small mb-0">{{ props.model }}</p>
            <p class="small mb-2">
                <b>{{ props.year }}</b> /
                {{ props.mileage }}km /
                Fuel: <b>{{ props.fuel }}</b>
            </p>
        </router-link>
    </div>
</template>

<style scoped>
.radius {
    border-radius: 2px;
}

.custom-column {
    padding: 0;
    margin: 0;
}
</style>