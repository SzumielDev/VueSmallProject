<script setup lang="ts">
import { computed, ref } from "vue";
import ImageSlider from "./ObjectDetailsComponents/ImageSlider.vue";
import Details from "./ObjectDetailsComponents/Details.vue";
import Descriptions from "./ObjectDetailsComponents/Descriptions.vue";
import Map from "./ObjectDetailsComponents/Map.vue";
import SellerInformation from "./ObjectDetailsComponents/SellerInformation.vue";
import TopHeaderDetails from "./ObjectDetailsComponents/TopHeaderDetails.vue";
import SimilarAdsPattern from "./ObjectDetailsComponents/SimilarAdsPattern.vue";
import { NAlert, NSpin } from "naive-ui";
import useCar from "@/composables/useCar";

const props = defineProps(["id"]);
const id = parseInt(props.id);

const { car, similarCars, fetchCarData } = useCar(id);
fetchCarData(id);

const isAlertActive = ref(false);
const activeNumber = () => {
    isAlertActive.value = true;
}

const veryfiedColor = computed (() => car.value?.veryfied === "Veryfied" ? "text-success" : "text-danger");



</script>
<template>
    <div>
        <div class="center">
            <div class="alert-custom">
                <n-alert v-show="isAlertActive" title="Quick info" type="info" closable>
                    This click can be saved to database!
                </n-alert>
            </div>
        </div>
        <div class="container-xxl extra-padding">
            <div class="row pt-2">
                <div class="col-12">
                    <p class="small text-primary"><router-link to="/home">Home</router-link> / Offer id: {{ props.id }}</p>
                </div>
            </div>
            <n-spin v-if="!car" size="large" />
            <div v-else class="row">
                <div class="col-9">
                    <ImageSlider :image="car.image" :images="car.images" :id="props.id" />
                    <Details :company="car.company" :model="car.model" :year="car.year"
                        :mileage="car.mileage" :fuel="car.fuel" :power="car.power"
                        :engine="car.engine" :doors="car.doors" :seats="car.seats"
                        :color="car.color" :country="car.country" :registered="car.registered"
                        :vin="car.vin" />
                    <Descriptions :sellerInfo="car.sellerInfo" :description="car.dedication" />
                    <Map :city="car.city" />
                    <SellerInformation :accountName="car.accountName" :number="car.number"
                        :veryfiedColor="veryfiedColor" :veryfied="car.veryfied" />
                </div>
                <div class="col-3">
                    <TopHeaderDetails :company="car.company" :model="car.model" :price="car.price"
                        :accountName="car.accountName" :number="car.number" :veryfied="car.veryfied"
                        :city="car.city" :date="car.date" :id="props.id" :veryfiedColor="veryfiedColor"
                        :handleButtonClick="activeNumber" />
                    <div class="row">
                        <div class="col-12">
                            <p class="kanit h6 pt-3 text-center"><b>You may also be interested</b></p>
                        </div>
                    </div>
                    <div class="row row-custom">
                        <SimilarAdsPattern v-for="car in similarCars.slice(0, 5)" :col="'col-12'" :company="car.company"
                            :model="car.model" :year="car.year" :price="car.price" :image="car.image" :id="car.id"
                            :mileage="car.mileage" />
                    </div>
                </div>
            </div>
            <div class="row pt-5">
                <div class="col-12">
                    <p class="kanit h5 pt-3"><b>Similar ads</b></p>
                </div>
                <SimilarAdsPattern v-for="car in similarCars.slice(0, 6)" :col="'col-2'" :company="car.company" :model="car.model"
                    :year="car.year" :price="car.price" :image="car.image" :id="car.id" :mileage="car.mileage" />
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

.extra-padding {
    padding-right: 150px;
    padding-left: 150px;
}

.row-custom {
    padding-right: 20px;
    padding-left: 20px;
}
</style>