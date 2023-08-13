<script setup lang="ts">
import { defineProps } from 'vue'
import { register } from 'swiper/element/bundle';

register();

const props = defineProps(["image", "images", "id"]);

</script>
<template>
    <div class="row">
        <div class="col-12">
            <swiper-container :slides-per-view="1" :navigation="true" :pagination="true" :scrolbar="true" :space-between="0" >
                <swiper-slide><img :src="`/src/assets/images/` + props.image" alt="tesla" class="img-fluid"></swiper-slide>
                <swiper-slide v-for="image in props.images"><img :src="`/src/assets/images/` + id + `/` + image" alt="tesla" class="img-fluid"></swiper-slide>
            </swiper-container>
        </div>
    </div>
</template>