<script setup lang="ts">

const props = defineProps(["year", "mileage", "fuel", "power", "company", "model", "doors", "seats", "color", "country", "registered", "vin", "engine"]);

</script>
<template>
    <div class="row text-center pt-3 mt-2 custom-info-row">
        <div class="col-3">
            <p class="kanit medium">Year: {{ props.year }}</p>
        </div>
        <div class="col-3">
            <p class="kanit medium">Mileage: {{ props.mileage.toLocaleString() }} Km</p>
        </div>
        <div class="col-3">
            <p class="kanit medium">FUEL: {{ props.fuel.toUpperCase() }}</p>
        </div>
        <div class="col-3">
            <p class="kanit medium">Power: {{ props.power }} Hp</p>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <p class="kanit h5 pt-3"><b>Details</b></p>
        </div>
        <div class="row">
            <div class="col-6 medium">
                <p>From: <span class="right-align text-primary">Private seller</span></p>
                <p>Category: <span class="right-align text-primary">SportCar</span></p>
                <p>Company: <span class="right-align text-primary">{{ props.company }}</span></p>
                <p>Model: <span class="right-align text-primary">{{ props.model }}</span></p>
                <p>Version: <span class="right-align text-primary">Coupe</span></p>
                <p>Production: <span class="right-align text-primary">{{ props.year }}</span></p>
                <p>Mileage: <span class="right-align text-primary">{{ props.mileage.toLocaleString() }} km</span></p>
                <p>Engine: <span class="right-align text-primary">{{ props.engine }}</span></p>
                <p>Fuel: <span class="right-align text-primary">{{ props.fuel }}</span></p>
                <p>Power: <span class="right-align text-primary">{{ props.power }} hp</span></p>
            </div>
            <div class="col-6 medium">
                <p>Gearbox: <span class="right-align text-primary">Automat</span></p>
                <p>Powered: <span class="right-align text-primary">Rear wheel</span></p>
                <p>Doors: <span class="right-align text-primary">{{ props.doors }}</span></p>
                <p>Seats: <span class="right-align text-primary">{{ props.seats }}</span></p>
                <p>Color: <span class="right-align text-primary">{{ props.color }}</span></p>
                <p>VAT: <span class="right-align text-primary">Yes</span></p>
                <p>Country: <span class="right-align text-primary">{{ props.country }}</span></p>
                <p>Registered: <span class="right-align text-primary">{{ props.registered }}</span></p>
                <p>Condition: <span class="right-align text-primary">Used</span></p>
                <p>vin: <span class="right-align text-primary">{{ props.vin }}</span></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.right-align {
    float: right;
}

.custom-info-row {
    border: 1px solid rgba(0, 0, 0, 0.253);
}
</style>