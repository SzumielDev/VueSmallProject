<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps(["currentItem", "columns"]);

const currentItem = props.currentItem;
const date = currentItem.date.slice(6, 20);

</script>
<template>
    <div :class="props.columns + ` pt-1 roboto hover pb-1`">
        <router-link class="text-decoration-none" :to="`/object/` + currentItem.id">
            <div class="row">
                <div class="col-3">
                    <img :src="`src/assets/images/` + currentItem.image" alt="tesla" class="img-fluid">
                </div>
                <div class="col-4 pt-2">
                    <p class="big mb-1"><b>{{ currentItem.company }} {{ currentItem.model }}</b></p>
                    <p class="medium">
                        <b>{{ currentItem.year }}</b> /
                        {{ currentItem.mileage }}km /
                        Fuel: <b>{{ currentItem.fuel.toUpperCase() }}</b>
                    </p>
                    <p class="small">
                        {{ currentItem.sellerInfo.substring(0, 150) }}{{ currentItem.sellerInfo.length > 100 ? '...' : '' }}
                    </p>
                </div>
                <div class="col-2">
                    <div class="position-relative h-100 w-100">
                        <div class="center-tag text-center">
                            <p class="medium mb-0">{{ currentItem.city }}</p>
                            <p class="small">{{ date }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="position-relative h-100 w-100">
                        <div class="center-tag">
                            <p class="text-danger"><b>{{ currentItem.price.toLocaleString() }} PLN</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<style scoped>
.img-fluid {
    border-radius: 5px;
}

.background {
    background-color: #72727200;
    border-radius: 5px;
    box-shadow: 0px 0px 3px 0px #b6b6b6;
    font-family: 'Kanit', sans-serif;
    transition: 0.3s;
}

.background:hover {
    box-shadow: 0px 0px 3px 0px #4b4b4b;
}

.center-tag {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.hover {
    border: 1px solid rgba(0, 0, 0, 0);
    transition: 0.4s;
}

.hover:hover {
    border: 1px solid rgba(0, 0, 0, 0.247);
}
</style>