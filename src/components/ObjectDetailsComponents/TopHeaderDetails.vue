<script setup lang="ts">
import { NStatistic, NNumberAnimation, NButton, NCollapseItem, NCollapse, NDropdown } from "naive-ui";

const props = defineProps(["company", "model", "price", "accountName", "number", "veryfied", "city", "date", "id", "veryfiedColor", "handleButtonClick"]);

const currentPrice = props.price;
const parseNumber = parseInt(props.number);
const formattedNumber = parseNumber.toLocaleString("pl-PL");

const dropdownInfo = [
    { label: formattedNumber, key: "1" },
];

</script>
<template>
    <p class="kanit h4 pt-3"><b>{{ props.company }} {{ props.model }}</b></p>
    <n-statistic tabular-nums>
        <p><b><n-number-animation ref="numberAnimationInstRef" show-separator :from="0" :to="currentPrice" :active="true"
                    :precision="0" :duration="2000" /></b> PLN <span class="small">with
                VAT</span></p>
    </n-statistic>
    <div class="row custom-info-row">
        <div class="col-12 kanit">
            <p class="h4 pt-2">{{ props.accountName }}</p>
            <p class="h6">Individual seller</p>
            <p :class="'h6 ' + props.veryfiedColor">Account {{ props.veryfied }}</p>
            <n-button class="w-100 mb-2" color="#DC143C">
                Send message to seller
            </n-button>
            <n-dropdown trigger="click" :options="dropdownInfo" size="large" :animated="true" >
                <n-button @click="handleButtonClick" ghost class="w-100 mb-2" color="#1E90FF">
                    Show me phone number
                </n-button>
            </n-dropdown>
            <n-collapse class="pb-2">
                <n-collapse-item :title="'Location: ' + props.city">
                    <iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="100%"
                        height="200"
                        :src="'https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=' + props.city + '&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'"></iframe>
                </n-collapse-item>
            </n-collapse>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <p class="small pt-2 mb-0">OFFER ID: {{ props.id }}</p>
            <p class="small">Date: {{ props.date }}</p>
        </div>
    </div>
</template>

<style scoped>
.custom-dropdown {
    background-color: black!important;
}
</style>