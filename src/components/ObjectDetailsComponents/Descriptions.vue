<script setup lang="ts">

const props = defineProps(["sellerInfo", "description"]);

</script>
<template>
                <div class="row">
                    <div class="col-12">
                        <p class="kanit h5 pt-3"><b>Equipment</b></p>
                        <p class="medium">Air conditioning, Alarm, Alloy wheels, Anti-lock braking system (ABS), Armrest,
                            Automatic climate control, Auxiliary heating, Bluetooth, Central locking, Cruise control,
                            Digital cockpit, Electrically adjustable seats, Electrically heated windshield, Electrically
                            heated seats, Electrically operated tailgate, Electrically adjustable mirrors, Electric windows,
                            ESP, Fog lights, Hands-free kit, Head-up display, Immobilizer, Isofix, Leather seats, Light
                            sensor, MP3 interface, Multifunction steering wheel, Navigation system, Non-smoker vehicle,
                            On-board computer, Panorama roof, Particulate filter, Power Assisted Steering, Rain sensor,
                            Sound system, Sport package, Sport seats, Sports suspension, Start-stop system, Sunroof,
                            Traction control, Tuner/radio, TV, USB, Xenon headlights</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="kanit h5 pt-3"><b>Description</b></p>
                        <p class="medium">{{ props.sellerInfo }}</p>
                    </div>
                </div>
                <!-- <div class="row">
                    <div class="col-12">
                        <p class="kanit h5 pt-3"><b>About</b></p>
                        <p class="small">{{ props.description }}</p>
                    </div>
                </div> -->
</template>