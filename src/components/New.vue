<script setup lang="ts">
import { ref, watch } from 'vue';
import { NSelect, NSpace } from 'naive-ui';
import HeaderDisplay from './constantComponents/HeaderDisplay.vue';
import NewAnnouncementPattern from './NewComponents/NewListingTemplate.vue';

const jsonFromApi = [
    {
        "id": 1,
        "account": "adrian@gmail.com",
        "accountName": "Adrian",
        "number": "607283495",
        "veryfied": "Veryfied",
        "company": "Tesla",
        "model": "Model S",
        "image": "tesla.jpg",
        "year": 2022,
        "mileage": 10000,
        "fuel": "electric",
        "power": 450,
        "price": 91300,
        "description": "The Tesla Model S is an all-electric luxury sedan that revolutionized the automotive industry. With its sleek design, cutting-edge technology, and impressive performance, the Model S has become a symbol of sustainable transportation. This electric car is powered by a 450-horsepower electric motor, offering instant torque and a quiet, smooth ride. The 2022 version boasts a spacious interior, advanced autopilot features, and a long electric range. Driving the Model S is not just about efficiency but also about experiencing the future of automotive engineering."
    },
    {
        "id": 2,
        "account": "dominik@gmail.com",
        "accountName": "Dominik",
        "number": "847586938",
        "veryfied": "Veryfied",
        "company": "Porsche",
        "model": "911",
        "image": "porsche.jpg",
        "year": 2021,
        "mileage": 8000,
        "fuel": "petrol",
        "power": 600,
        "price": 120500,
        "description": "The Porsche 911 is an iconic sports car known for its timeless design and outstanding performance. The 2021 model continues the legacy with its powerful 600-horsepower petrol engine, providing exhilarating acceleration and precise handling. The 911's interior exudes luxury and driver-focused ergonomics, making every journey an engaging experience. Whether you're cruising on the highway or carving through mountain roads, the Porsche 911 delivers a blend of comfort and adrenaline-pumping thrills, making it a dream car for enthusiasts and collectors alike."
    },
    {
        "id": 3,
        "account": "John@gmail.com",
        "accountName": "John",
        "number": "293847512",
        "veryfied": "Veryfied",
        "company": "Ferrari",
        "model": "488 GTB",
        "image": "ferrari.jpg",
        "year": 2020,
        "mileage": 5000,
        "fuel": "petrol",
        "power": 670,
        "price": 256000,
        "description": "The Ferrari 488 GTB is a masterpiece of Italian engineering and design. Its mid-engine layout, powered by a roaring 670-horsepower petrol engine, provides breathtaking acceleration and a top speed that leaves other cars in the dust. The 488 GTB's aerodynamic bodywork not only enhances its performance but also showcases its artistic beauty. Inside the cockpit, you'll find a perfect blend of luxury and motorsport-inspired elements. Owning a Ferrari 488 GTB means embracing a legacy of speed, passion, and the pure joy of driving a true supercar."
    },
    {
        "id": 4,
        "account": "clara@gmail.com",
        "accountName": "Clara",
        "number": "374586978",
        "veryfied": "Veryfied",
        "company": "Lamborghini",
        "model": "Huracan",
        "image": "lambo.jpg",
        "year": 2022,
        "mileage": 3000,
        "fuel": "petrol",
        "power": 630,
        "price": 299000,
        "description": "The Lamborghini Huracan is a strikingly designed, high-performance supercar that represents the pinnacle of automotive artistry. Its 630-horsepower V10 engine produces a symphony of mechanical music as it propels the car to jaw-dropping speeds. The Huracan's advanced all-wheel-drive system and razor-sharp handling ensure a thrilling driving experience on any road. Inside, the cabin is adorned with premium materials and the latest tech, providing a luxurious and futuristic atmosphere. Driving a Lamborghini Huracan is an extraordinary experience that makes you feel like a rockstar on the road."
    },
    {
        "id": 5,
        "account": "karol@gmail.com",
        "accountName": "Karol",
        "number": "847586978",
        "veryfied": "Veryfied",
        "company": "Aston Martin",
        "model": "DB11",
        "image": "aston.jpg",
        "year": 2021,
        "mileage": 6000,
        "fuel": "petrol",
        "power": 600,
        "price": 184000,
        "description": "The Aston Martin DB11 is a grand tourer that blends elegance, power, and refinement into a single package. Its design exudes sophistication, and its 600-horsepower V12 engine provides the perfect balance of performance and comfort. The DB11's interior is a blend of handcrafted luxury and advanced technology, offering a serene and comfortable environment for long journeys. Whether cruising on the open road or commanding attention on city streets, the Aston Martin DB11 delivers a timeless and captivating driving experience, showcasing the epitome of British motoring heritage."
    },
    {
        "id": 6,
        "account": "julian@gmail.com",
        "accountName": "Julian",
        "number": "374952736",
        "company": "Bentley",
        "veryfied": "Veryfied",
        "model": "Continental GT",
        "image": "bentley.jpg",
        "year": 2022,
        "mileage": 4000,
        "fuel": "petrol",
        "power": 626,
        "price": 219000,
        "description": "The Bentley Continental GT is the embodiment of luxury, craftsmanship, and performance. This grand tourer boasts a 626-horsepower W12 engine, offering effortless acceleration and a refined driving experience. The Continental GT's opulent interior features the finest materials, exquisite handcrafted details, and cutting-edge technology. It's a car designed for those who appreciate the finer things in life and seek unparalleled comfort on their journeys. Owning a Bentley Continental GT is a statement of sophistication and a testament to the brand's heritage of creating extraordinary automobiles."
    },
    {
        "id": 7,
        "account": "marcin@gmail.com",
        "accountName": "Marcin",
        "number": "495968374",
        "company": "Rolls-Royce",
        "model": "Ghost",
        "veryfied": "Veryfied",
        "image": "royce.jpg",
        "year": 2021,
        "mileage": 5000,
        "fuel": "petrol",
        "power": 563,
        "price": 329000,
        "description": "The Rolls-Royce Ghost is the epitome of luxury and elegance, catering to those who demand the best of the best. Under its long, graceful bonnet lies a 563-horsepower V12 engine, providing a serene and powerful ride. The Ghost's interior is a sanctuary of tranquility, enveloped in handcrafted leather, wood, and the latest technology. Every aspect of this car is meticulously crafted to create an experience that is beyond comparison. Driving a Rolls-Royce Ghost is an expression of ultimate refinement and a celebration of automotive excellence."
    },
    {
        "id": 8,
        "account": "piotr@gmail.com",
        "accountName": "Piotr",
        "number": "847586948",
        "company": "Mercedes-Benz",
        "model": "S-Class",
        "veryfied": "Veryfied",
        "image": "mercedes.jpg",
        "year": 2022,
        "mileage": 2000,
        "fuel": "hybrid",
        "power": 496,
        "price": 125000,
        "description": "The Mercedes-Benz S-Class is the epitome of luxury and sophistication. As a flagship sedan, it sets the standard for automotive excellence. The 2022 model showcases cutting-edge technology and a powerful yet efficient hybrid powertrain. With 496 horsepower under the hood, the S-Class delivers a smooth and refined driving experience. The interior is a haven of opulence, featuring top-notch materials, spaciousness, and the latest advancements in comfort and safety. Whether you're driving or being chauffeured, the S-Class offers an unparalleled level of comfort and elegance. Owning a Mercedes-Benz S-Class means embracing automotive refinement and prestige."
    },
    {
        "id": 9,
        "account": "rolan@gmail.com",
        "accountName": "Rolan",
        "number": "847586937",
        "company": "BMW",
        "veryfied": "Veryfied",
        "model": "8 Series",
        "image": "bmw.jpg",
        "year": 2020,
        "mileage": 7000,
        "fuel": "petrol",
        "power": 523,
        "price": 93600,
        "description": "The BMW 8 Series is a stunning combination of luxury and performance. With its powerful 523-horsepower petrol engine, it offers an exhilarating driving experience. The 8 Series boasts a sleek and athletic design that captures attention wherever it goes. Inside the cabin, you'll find a perfect blend of opulence and modern technology, creating a comfortable and connected environment. This grand tourer is ideal for both long journeys and spirited drives on winding roads. Owning a BMW 8 Series means embracing the ultimate driving pleasure and being part of the brand's rich motorsport heritage."
    },
    {
        "id": 10,
        "account": "sebastian@gmail.com",
        "accountName": "Sebastian",
        "number": "102837485",
        "veryfied": "Veryfied",
        "company": "Lexus",
        "model": "LS",
        "image": "lexus.jpg",
        "year": 2022,
        "mileage": 3000,
        "fuel": "hybrid",
        "power": 416,
        "price": 112000,
        "description": "The Lexus LS is a luxury sedan that combines refined elegance with innovative technology. The 2022 model features a powerful yet efficient hybrid powertrain, delivering 416 horsepower for a smooth and responsive ride. The LS exudes sophistication, with a striking design that reflects Japanese craftsmanship at its finest. Inside, the cabin envelops you in premium materials, providing a serene and comfortable environment. Advanced safety features and driver-assistance systems ensure a secure driving experience. The Lexus LS caters to those who seek tranquility and style, offering a unique alternative to European luxury sedans."
    },
    {
        "id": 11,
        "account": "clever@gmail.com",
        "accountName": "Clever",
        "number": "857364756",
        "veryfied": "Non-Veryfied",
        "company": "Audi",
        "model": "R8",
        "image": "audi.jpg",
        "year": 2021,
        "mileage": 7000,
        "fuel": "petrol",
        "power": 620,
        "price": 186200,
        "description": "The Audi R8 is a high-performance sports car that excites with both its stunning design and exhilarating driving dynamics. Powered by a 620-horsepower petrol engine, the R8 sprints from 0 to 60 mph in breathtaking speed. Its quattro all-wheel-drive system ensures exceptional traction, making it a supercar that can be driven with confidence in any weather condition. The R8's interior is a blend of sportiness and luxury, enveloping the driver in a cockpit designed for maximum engagement. Driving an Audi R8 is an experience that ignites the senses and reaffirms Audi's commitment to automotive excellence and innovation."
    },
    {
        "id": 12,
        "account": "arnold@gmail.com",
        "accountName": "Arnold",
        "number": "938475867",
        "veryfied": "Non-Veryfied",
        "company": "Jaguar",
        "model": "F-Type",
        "image": "jaguar.jpg",
        "year": 2020,
        "mileage": 5000,
        "fuel": "petrol",
        "power": 380,
        "price": 95300,
        "description": "The Jaguar F-Type is a beautiful sports car that combines British elegance with thrilling performance. The 2020 model features a 380-horsepower petrol engine, providing exhilarating acceleration and a distinctive exhaust note. The F-Type's design is a nod to Jaguar's heritage, with sleek lines and a muscular stance. Inside the cabin, you'll find a driver-focused cockpit with premium materials and modern infotainment. Whether you're cruising on scenic roads or challenging the limits on the track, the Jaguar F-Type delivers a dynamic and engaging driving experience. Owning an F-Type means joining a legacy of iconic sports cars and embracing the passion of driving."
    },
    {
        "id": 13,
        "account": "keyne@gmail.com",
        "accountName": "Keyne",
        "number": "283018475",
        "veryfied": "Non-Veryfied",
        "company": "Maserati",
        "model": "GranTurismo",
        "image": "maseratti.jpg",
        "year": 2021,
        "mileage": 6000,
        "fuel": "petrol",
        "power": 454,
        "price": 144000,
        "description": "The Maserati GranTurismo is a true Italian masterpiece that blends performance and elegance. Its 454-horsepower petrol engine delivers a symphony of sound and impressive acceleration. The GranTurismo's design is a captivating combination of modernity and timeless styling, showcasing the brand's passion for aesthetics. Inside the luxurious cabin, you'll find a perfect balance of craftsmanship and technology. This grand tourer is engineered for long-distance journeys, where comfort and excitement harmoniously coexist. Driving the Maserati GranTurismo is an experience that captures the soul of Italian motoring heritage and leaves a lasting impression on every road it graces."
    },
    {
        "id": 14,
        "account": "ola@gmail.com",
        "accountName": "Ola",
        "number": "910375038",
        "veryfied": "Non-Veryfied",
        "company": "McLaren",
        "model": "570S",
        "image": "mclaren.jpg",
        "year": 2022,
        "mileage": 3000,
        "fuel": "petrol",
        "power": 562,
        "price": 252000,
        "description": "The McLaren 570S is a supercar that exemplifies British engineering prowess and performance. With its 562-horsepower petrol engine, the 570S is an adrenaline-pumping thrill ride on both the track and the road. Its sleek and aerodynamic design not only turns heads but also enhances its driving dynamics. Step inside, and you'll be greeted by a driver-focused cockpit filled with lightweight materials and cutting-edge technology. Every element is engineered with precision to maximize the driving experience. Owning a McLaren 570S means embracing the spirit of motorsport and experiencing the art of driving a finely-tuned performance machine."
    },
    {
        "id": 15,
        "account": "marianna@gmail.com",
        "accountName": "Marianna",
        "number": "309480581",
        "veryfied": "Non-Veryfied",
        "company": "Alfa Romeo",
        "model": "Giulia Quadrifoglio",
        "image": "alfaromeo.jpg",
        "year": 2020,
        "mileage": 5000,
        "fuel": "petrol",
        "power": 505,
        "price": 95000,
        "description": "The Alfa Romeo Giulia Quadrifoglio is an Italian sports sedan that embodies passion and excitement. Its 505-horsepower petrol engine delivers impressive power and thrilling acceleration. The Quadrifoglio's striking design showcases Alfa Romeo's racing heritage, with a perfect blend of aerodynamics and style. Inside the driver-centric cabin, you'll find premium materials and advanced technology for a connected and enjoyable driving experience. The Giulia Quadrifoglio excels both as a daily driver and a track-focused performer. Embracing the Alfa Romeo spirit means immersing yourself in a legacy of automotive artistry and a dedication to delivering a pure and emotional driving experience."
    },
    {
        "id": 16,
        "account": "tomasz@gmail.com",
        "accountName": "Tomasz",
        "number": "938405687",
        "veryfied": "Non-Veryfied",
        "company": "Lotus",
        "model": "Evora",
        "image": "lotus.jpg",
        "year": 2021,
        "mileage": 4000,
        "fuel": "petrol",
        "power": 416,
        "price": 120500,
        "description": "The Lotus Evora is a lightweight sports car that embodies the essence of driving purity. With a 416-horsepower petrol engine, the Evora delivers an engaging and responsive driving experience. Lotus' dedication to lightweight engineering ensures nimble handling and agility on twisty roads. The Evora's exterior design is sleek and aerodynamic, reflecting its focus on performance. Inside, the cockpit is driver-focused, with supportive seats and minimalist controls. Driving a Lotus Evora is an experience that connects you with the road and instills a sense of driving confidence. Embracing the Lotus brand means being part of a community that values the joy of driving and the thrill of automotive craftsmanship."
    },
    {
        "id": 17,
        "account": "anika@gmail.com",
        "accountName": "Anika",
        "number": "908790689",
        "veryfied": "Non-Veryfied",
        "company": "Acura",
        "model": "NSX",
        "image": "honda.jpg",
        "year": 2022,
        "mileage": 2000,
        "fuel": "hybrid",
        "power": 573,
        "price": 181000,
        "description": "The Acura NSX is a hybrid supercar that fuses cutting-edge technology with exhilarating performance. Its 573-horsepower hybrid powertrain delivers impressive acceleration and precise handling. The NSX's sleek and aggressive design reflects its supercar status, while its advanced aerodynamics enhance stability at high speeds. Inside the cabin, you'll find a driver-oriented layout with premium materials and modern conveniences. The NSX's hybrid system adds an eco-friendly aspect to the supercar world, showcasing Acura's commitment to sustainable performance. Driving an Acura NSX means embracing innovation and experiencing the thrill of a high-performance machine with a conscience."
    },
    {
        "id": 18,
        "account": "andrew@gmail.com",
        "accountName": "Andrew",
        "number": "906907906",
        "veryfied": "Non-Veryfied",
        "company": "Infiniti",
        "model": "Q60",
        "image": "infinity.jpg",
        "year": 2021,
        "mileage": 6000,
        "fuel": "petrol",
        "power": 400,
        "price": 91500,
        "description": "The Infiniti Q60 is a stylish and dynamic coupe that offers a compelling blend of performance and comfort. Its 400-horsepower petrol engine provides strong acceleration and a sporty driving experience. The Q60's design is a balance of elegance and aggression, capturing attention from every angle. Inside, the cabin exudes a luxurious ambiance with premium materials and modern technology. The Q60 is an enjoyable daily driver, yet it has the sporty character to satisfy enthusiasts. Infiniti's attention to detail and craftsmanship shine through in every aspect of this coupe, making it a great choice for those seeking a sporty and refined driving experience."
    },
    {
        "id": 19,
        "account": "elon@gmail.com",
        "accountName": "Elon",
        "number": "906905904",
        "veryfied": "Non-Veryfied",
        "company": "Lincoln",
        "model": "Continental",
        "image": "lincoln.jpg",
        "year": 2022,
        "mileage": 5000,
        "fuel": "hybrid",
        "power": 400,
        "price": 94900,
        "description": "The Lincoln Continental is a premium luxury sedan that offers refined elegance and modern technology. With a hybrid powertrain delivering 400 horsepower, it provides a smooth and quiet driving experience, complementing its serene interior. The Continental's design showcases a harmonious blend of classic elements and contemporary styling. Inside, you'll find a spacious and comfortable cabin, featuring high-quality materials and advanced infotainment options. This luxury sedan is designed for comfort and relaxation on long journeys, making it an ideal choice for executives and those seeking a peaceful driving environment. Driving a Lincoln Continental is a statement of sophisticated luxury and an appreciation for timeless automotive design."
    },
    {
        "id": 20,
        "account": "mark@gmail.com",
        "accountName": "Mark",
        "number": "805803802",
        "veryfied": "Non-Veryfied",
        "company": "Chevrolet",
        "model": "Corvette",
        "image": "corvette.jpg",
        "year": 2022,
        "mileage": 5000,
        "fuel": "petrol",
        "power": 490,
        "price": 99000,
        "description": "The Chevrolet Corvette is an American sports car icon that epitomizes performance and style. The 2022 model boasts a 490-horsepower petrol engine, ensuring thrilling acceleration and track-ready dynamics. The Corvette's striking design exudes a sense of speed, and its removable roof panel allows for an open-air driving experience. Inside the cockpit, you'll find a driver-centric layout with modern technology and supportive seats. The Corvette is a formidable performer both on the racetrack and everyday roads, delivering the joy of driving in its purest form. Owning a Chevrolet Corvette means joining a passionate community of enthusiasts and embracing the spirit of American muscle and performance engineering."
    }
];

const data = JSON.parse(JSON.stringify(jsonFromApi));

const sliceDataByTopThree = ref(data.slice(0, 3));
const sliceRestOfData = ref(data.slice(3));
const sortingKey = ref(null);

const sortedDataByTopThree = ref(sliceDataByTopThree.value);

const sortData = (arrayToSort) => {
    const [key, direction] = sortingKey.value?.split("-") || [null, null];
    arrayToSort.value = arrayToSort.value.sort((a, b) => {
        if (direction === "Asc") {
            return a[key] - b[key];
        }
        if (direction === "Desc") {
            return b[key] - a[key];
        }
        return 0;
    })
}

watch(sortingKey, () => {
    sortData(sortedDataByTopThree);
    sortData(sliceRestOfData);
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
                <NewAnnouncementPattern :key="car.id" :columns="'col-4'" :car="car" v-for="car in sortedDataByTopThree" />
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