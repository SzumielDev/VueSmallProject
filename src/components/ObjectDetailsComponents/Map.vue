<script setup lang="ts">

const props = defineProps(["city"]);

</script>
<template>
                <div class="row">
                    <div class="col-12">
                        <p class="kanit h5 pt-3"><b>Location: {{ props.city }}</b></p>
                        <p class="small">
                            <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                                width="100%" height="200"
                                :src="'https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=' + props.city + '&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'"></iframe>
                        </p>
                    </div>
                </div>
</template>