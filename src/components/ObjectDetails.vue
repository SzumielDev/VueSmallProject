<script setup lang="ts">
import { ref } from "vue";
import ImageSlider from "./ObjectDetailsComponents/ImageSlider.vue";
import Details from "./ObjectDetailsComponents/Details.vue";
import Descriptions from "./ObjectDetailsComponents/Descriptions.vue";
import Map from "./ObjectDetailsComponents/Map.vue";
import SellerInformation from "./ObjectDetailsComponents/SellerInformation.vue";
import TopHeaderDetails from "./ObjectDetailsComponents/TopHeaderDetails.vue";
import SimilarAdsPattern from "./ObjectDetailsComponents/SimilarAdsPattern.vue";
import { NAlert } from "naive-ui";

const props = defineProps(["id"]);

const isAlertActive = ref(false);
const activeNumber = () => {
    isAlertActive.value = true;
}

const jsonFromApi = [
    {
        "id": 1,
        "date": "11:15, 16 July 2023",
        "account": "adrian@gmail.com",
        "accountName": "Adrian",
        "number": "607283495",
        "veryfied": "Veryfied",
        "city": "Warsaw",
        "company": "Tesla",
        "model": "Model S",
        "image": "tesla.jpg",
        "images": {
            "one": "tesla02.jpg",
            "two": "tesla03.jpg"
        },
        "year": 2022,
        "mileage": 10000,
        "fuel": "electric",
        "power": 450,
        "engine": "electric",
        "doors": "4/5",
        "seats": "5",
        "color": "Red",
        "country": "USA",
        "registered": "Yes",
        "vin": "123456789",
        "price": 91300,
        "sellerInfo": "For sale is a remarkable Tesla Model S, ready to deliver an extraordinary driving experience. This car combines innovation, elegance, and astonishing power. The Tesla Model S was designed with the future in mind, harnessing the full potential of electric vehicles. Inside, the car boasts high-quality materials, offering both comfort and luxurious design. Once you start your journey, you'll enjoy silence, smoothness, and instant acceleration. The Tesla Model S can reach impressive speeds in the blink of an eye, all while emitting zero tailpipe emissions, making it environmentally friendly.Equipped with cutting-edge technology, this Tesla offers an advanced autopilot system for safe and comfortable highway driving. Not only does it provide enhanced safety, but it also reduces the stress of traveling.The car is in excellent technical and visual condition, always serviced at authorized Tesla centers. I am confident that the Tesla Model S will be a dream come true for any electric car and technology enthusiast.If you are ready for an exciting and eco-friendly ride, this Tesla Model S is the perfect choice! Contact me to schedule a test drive and experience firsthand the exhilarating journey this vehicle can provide. Don't miss this opportunity to own a revolutionary car today!",
        "description": "The Tesla Model S is an all-electric luxury sedan that revolutionized the automotive industry. With its sleek design, cutting-edge technology, and impressive performance, the Model S has become a symbol of sustainable transportation. This electric car is powered by a 450-horsepower electric motor, offering instant torque and a quiet, smooth ride. The 2022 version boasts a spacious interior, advanced autopilot features, and a long electric range. Driving the Model S is not just about efficiency but also about experiencing the future of automotive engineering."
    },
    {
        "id": 2,
        "date": "10:15, 12 July 2023",
        "account": "dominik@gmail.com",
        "accountName": "Dominik",
        "number": "847586938",
        "veryfied": "Veryfied",
        "city": "Olsztyn",
        "company": "Porsche",
        "model": "911",
        "image": "porsche.jpg",
        "images": {
            "one": "porsche02.jpg",
            "two": "porsche03.jpg"
        },
        "year": 2021,
        "mileage": 8000,
        "fuel": "petrol",
        "power": 600,
        "engine": "3989",
        "doors": "3/4",
        "seats": "2",
        "color": "Blue",
        "country": "Poland",
        "registered": "Yes",
        "vin": "2857326092",
        "price": 120500,
        "sellerInfo": "For sale is a stunning Porsche 911 2021, a true masterpiece of automotive engineering. This iconic sports car is synonymous with performance, luxury, and timeless design. The Porsche 911 2021 model continues the legacy of excellence with its powerful engine and precise handling.Step inside the Porsche 911 and you'll be greeted by a premium interior that exudes elegance and craftsmanship. The driver-focused cockpit puts you in command, creating an immersive driving experience like no other. The car is equipped with the latest technology and features, making every journey comfortable and enjoyable.Under the hood, the Porsche 911 packs a punch with its high-performance engine, delivering exhilarating acceleration and speed. Its dynamic suspension system ensures a smooth ride, whether you're navigating city streets or cruising on the open highway.Safety is paramount, and the Porsche 911 is equipped with advanced safety features to keep you and your passengers protected. With its sleek and timeless design, this car is sure to turn heads and leave a lasting impression.This Porsche 911 2021 is meticulously maintained and in impeccable condition. It's a rare opportunity to own a true automotive legend that offers both performance and prestige. Don't miss the chance to own this remarkable sports car. Contact us to arrange a test drive and experience the thrill of driving a Porsche 911 2021 firsthand.",
        "description": "The Porsche 911 is an iconic sports car known for its timeless design and outstanding performance. The 2021 model continues the legacy with its powerful 600-horsepower petrol engine, providing exhilarating acceleration and precise handling. The 911's interior exudes luxury and driver-focused ergonomics, making every journey an engaging experience. Whether you're cruising on the highway or carving through mountain roads, the Porsche 911 delivers a blend of comfort and adrenaline-pumping thrills, making it a dream car for enthusiasts and collectors alike."
    },
    {
        "id": 3,
        "date": "15:45, 12 July 2023",
        "account": "John@gmail.com",
        "accountName": "John",
        "number": "293847512",
        "veryfied": "Veryfied",
        "city": "Krakow",
        "company": "Ferrari",
        "model": "488 GTB",
        "image": "ferrari.jpg",
        "images": {
            "one": "ferrari02.jpg",
            "two": "ferrari03.jpg"
        },
        "year": 2020,
        "mileage": 5000,
        "fuel": "petrol",
        "power": 670,
        "engine": "3899",
        "doors": "3/4",
        "seats": "2",
        "color": "Red",
        "country": "Poland",
        "registered": "Yes",
        "vin": "36456744",
        "price": 256000,
        "sellerInfo": "For sale is a breathtaking 2020 Ferrari 488 GTB, a symbol of pure automotive excellence. This stunning supercar embodies the perfect balance of power, performance, and style. The Ferrari 488 GTB is designed to dominate the road, with its powerful V8 engine that roars to life, propelling you into a world of adrenaline-pumping acceleration.Step inside this Italian masterpiece, and you'll be captivated by the luxurious and driver-centric interior. Every detail is crafted to perfection, creating an unrivaled driving experience. With its cutting-edge technology and advanced features, the Ferrari 488 GTB offers the ultimate in comfort and convenience.This speed demon is equipped with state-of-the-art handling and suspension systems, ensuring precise control and dynamic handling around every curve. Its aerodynamic design enhances performance, while the sleek lines command attention wherever you go.Safety is a top priority, and the Ferrari 488 GTB comes with advanced safety features to keep you secure on your exhilarating journeys. This automotive marvel is meticulously maintained and kept in pristine condition.Owning a Ferrari 488 GTB is a dream come true for any car enthusiast, and this 2020 model is a rare find. Don't miss the opportunity to experience the thrill of driving a Ferrari. Contact us now to arrange a test drive and make this magnificent supercar yours today.",
        "description": "The Ferrari 488 GTB is a masterpiece of Italian engineering and design. Its mid-engine layout, powered by a roaring 670-horsepower petrol engine, provides breathtaking acceleration and a top speed that leaves other cars in the dust. The 488 GTB's aerodynamic bodywork not only enhances its performance but also showcases its artistic beauty. Inside the cockpit, you'll find a perfect blend of luxury and motorsport-inspired elements. Owning a Ferrari 488 GTB means embracing a legacy of speed, passion, and the pure joy of driving a true supercar."
    },
    {
        "id": 4,
        "date": "12:45, 12 August 2023",
        "account": "clara@gmail.com",
        "accountName": "Clara",
        "number": "374586978",
        "veryfied": "Veryfied",
        "city": "Szczecin",
        "company": "Lamborghini",
        "model": "Huracan",
        "image": "lambo.jpg",
        "images": {
            "one": "lambo02.jpg",
            "two": "lambo03.jpg"
        },
        "year": 2022,
        "mileage": 3000,
        "fuel": "petrol",
        "power": 630,
        "engine": "5200",
        "doors": "3/4",
        "seats": "2",
        "color": "Black",
        "country": "Poland",
        "registered": "Yes",
        "vin": "435647823563",
        "price": 299000,
        "sellerInfo": "For sale is an extraordinary 2022 Lamborghini Huracan, a stunning masterpiece of automotive engineering. This high-performance supercar is the epitome of speed, style, and prestige. With its powerful V10 engine, the Lamborghini Huracan delivers heart-racing acceleration and an exhilarating driving experience.Step inside this Italian beauty, and you'll be immersed in luxury and sophistication. The interior is meticulously crafted with premium materials, offering both comfort and a driver-focused design. Equipped with cutting-edge technology, the Lamborghini Huracan ensures a seamless and connected driving experience.The sleek and aerodynamic design of the Huracan not only turns heads but also enhances performance. Its dynamic handling and precision steering make every turn on the road a thrilling adventure.Safety is paramount, and this supercar comes equipped with advanced safety features to provide peace of mind during your fast-paced drives.The 2022 Lamborghini Huracan is a true automotive masterpiece, meticulously maintained and in impeccable condition. Owning this supercar is a dream come true for any car enthusiast. Don't miss the chance to experience the thrill of driving a Lamborghini. Contact us now to schedule a test drive and make this exquisite supercar yours today.",
        "description": "The Lamborghini Huracan is a strikingly designed, high-performance supercar that represents the pinnacle of automotive artistry. Its 630-horsepower V10 engine produces a symphony of mechanical music as it propels the car to jaw-dropping speeds. The Huracan's advanced all-wheel-drive system and razor-sharp handling ensure a thrilling driving experience on any road. Inside, the cabin is adorned with premium materials and the latest tech, providing a luxurious and futuristic atmosphere. Driving a Lamborghini Huracan is an extraordinary experience that makes you feel like a rockstar on the road."
    },
    {
        "id": 5,
        "date": "17:45, 19 August 2023",
        "account": "karol@gmail.com",
        "accountName": "Karol",
        "number": "847586978",
        "veryfied": "Veryfied",
        "city": "Sopot",
        "company": "Aston Martin",
        "model": "DB11",
        "image": "aston.jpg",
        "images": {
            "one": "aston02.jpg",
            "two": "aston03.jpg"
        },
        "year": 2021,
        "mileage": 6000,
        "fuel": "petrol",
        "power": 600,
        "engine": "5200",
        "doors": "3/4",
        "seats": "2",
        "color": "Grey",
        "country": "Poland",
        "registered": "Yes",
        "vin": "6345732734",
        "price": 184000,
        "sellerInfo": "For sale is an exquisite 2021 Aston Martin, a true epitome of luxury and performance. This prestigious car is a timeless beauty, designed to turn heads and leave a lasting impression. With its powerful engine, the Aston Martin delivers an exhilarating driving experience that will ignite your senses.Step inside the elegant interior, and you'll be surrounded by opulence and craftsmanship. The Aston Martin is equipped with state-of-the-art technology and features, ensuring a seamless and connected journey.The sleek and aerodynamic design of this car not only enhances its performance but also exudes sophistication and class. Its dynamic handling and smooth ride make it a joy to drive on any road.Safety is a top priority, and the Aston Martin comes equipped with advanced safety features to keep you and your passengers secure.This 2021 Aston Martin is meticulously maintained and in pristine condition, ready to fulfill your dreams of owning a true luxury car. Don't miss the opportunity to experience the thrill of driving an Aston Martin. Contact us now to arrange a test drive and make this exceptional car yours today.",
        "description": "The Aston Martin DB11 is a grand tourer that blends elegance, power, and refinement into a single package. Its design exudes sophistication, and its 600-horsepower V12 engine provides the perfect balance of performance and comfort. The DB11's interior is a blend of handcrafted luxury and advanced technology, offering a serene and comfortable environment for long journeys. Whether cruising on the open road or commanding attention on city streets, the Aston Martin DB11 delivers a timeless and captivating driving experience, showcasing the epitome of British motoring heritage."
    },
    {
        "id": 6,
        "date": "19:25, 16 August 2023",
        "account": "julian@gmail.com",
        "accountName": "Julian",
        "number": "374952736",
        "veryfied": "Veryfied",
        "city": "Warsaw",
        "company": "Bentley",
        "model": "Continental GT",
        "image": "bentley.jpg",
        "images": {
            "one": "bentley02.jpg",
            "two": "bentley03.jpg"
        },
        "year": 2022,
        "mileage": 4000,
        "fuel": "petrol",
        "power": 626,
        "engine": "5989",
        "doors": "4/5",
        "seats": "5",
        "color": "White",
        "country": "Poland",
        "registered": "Yes",
        "vin": "363723263456347",
        "price": 219000,
        "sellerInfo": "For sale is an exquisite 2022 Bentley Continental GT, a true masterpiece of automotive engineering. This luxury grand tourer is the epitome of elegance, combining powerful performance with opulent comfort. The Bentley Continental GT boasts a powerful W12 engine, delivering an exhilarating driving experience that is sure to thrill.Step inside the lavish interior, and you'll be immersed in the finest craftsmanship and attention to detail. The Bentley Continental GT is equipped with cutting-edge technology, providing a seamless and connected driving experience.The iconic design of this car exudes sophistication and class, with its sleek lines and distinctive grille. Its adaptive suspension ensures a smooth and refined ride, making every journey a pleasure.Safety is a top priority, and the Bentley Continental GT comes equipped with advanced safety features to provide peace of mind on the road.This 2022 Bentley Continental GT is meticulously maintained and in impeccable condition, ready to fulfill your dreams of owning a true luxury car. Don't miss the opportunity to experience the elegance and performance of the Bentley Continental GT. Contact us now to schedule a test drive and make this exceptional car yours today.",
        "description": "The Bentley Continental GT is the embodiment of luxury, craftsmanship, and performance. This grand tourer boasts a 626-horsepower W12 engine, offering effortless acceleration and a refined driving experience. The Continental GT's opulent interior features the finest materials, exquisite handcrafted details, and cutting-edge technology. It's a car designed for those who appreciate the finer things in life and seek unparalleled comfort on their journeys. Owning a Bentley Continental GT is a statement of sophistication and a testament to the brand's heritage of creating extraordinary automobiles."
    },
    {
        "id": 7,
        "date": "19:45, 11 August 2023",
        "account": "marcin@gmail.com",
        "accountName": "Marcin",
        "number": "495968374",
        "veryfied": "Veryfied",
        "city": "Wroclaw",
        "company": "Rolls-Royce",
        "model": "Ghost",
        "image": "royce.jpg",
        "images": {
            "one": "royce02.jpg",
            "two": "royce03.jpg"
        },
        "year": 2021,
        "mileage": 5000,
        "fuel": "petrol",
        "power": 563,
        "engine": "6698",
        "doors": "4/5",
        "seats": "4",
        "color": "Red",
        "country": "Poland",
        "registered": "Yes",
        "vin": "5343272325",
        "price": 329000,
        "sellerInfo": "For sale is a stunning 2021 Rolls-Royce Ghost, a true embodiment of luxury and sophistication. This prestigious car is a masterpiece of craftsmanship, designed to offer the utmost comfort and elegance. The Rolls-Royce Ghost features a powerful V12 engine, providing a serene and powerful driving experience.Step inside the opulent interior, and you'll be enveloped in the finest materials and exquisite detailing. The Rolls-Royce Ghost is equipped with the latest technology, ensuring a seamless and pleasurable journey.The iconic design of this car exudes prestige and class, with its signature Spirit of Ecstasy hood ornament and stately presence. Its air suspension delivers a smooth and quiet ride, making every drive a serene and relaxing experience.Safety is paramount, and the Rolls-Royce Ghost comes equipped with advanced safety features to ensure the well-being of its passengers.This 2021 Rolls-Royce Ghost is meticulously maintained and in immaculate condition, ready to provide you with an unparalleled driving experience. Don't miss the opportunity to own the epitome of luxury and elegance. Contact us now to schedule a test drive and make this extraordinary car yours today.",
        "description": "The Rolls-Royce Ghost is the epitome of luxury and elegance, catering to those who demand the best of the best. Under its long, graceful bonnet lies a 563-horsepower V12 engine, providing a serene and powerful ride. The Ghost's interior is a sanctuary of tranquility, enveloped in handcrafted leather, wood, and the latest technology. Every aspect of this car is meticulously crafted to create an experience that is beyond comparison. Driving a Rolls-Royce Ghost is an expression of ultimate refinement and a celebration of automotive excellence."
    },
    {
        "id": 8,
        "date": "11:45, 10 August 2023",
        "account": "piotr@gmail.com",
        "accountName": "Piotr",
        "number": "847586948",
        "veryfied": "Veryfied",
        "city": "Warsaw",
        "company": "Mercedes-Benz",
        "model": "S-Class",
        "image": "mercedes.jpg",
        "images": {
            "one": "mercedes02.jpg",
            "two": "mercedes03.jpg"
        },
        "year": 2022,
        "mileage": 2000,
        "fuel": "hybrid",
        "power": 496,
        "engine": "Petrol + Electric",
        "doors": "4/5",
        "seats": "5",
        "color": "Black",
        "country": "Poland",
        "registered": "Yes",
        "vin": "36456744",
        "price": 125000,
        "sellerInfo": "For sale is an exceptional 2022 Mercedes-Benz S-Class, a true embodiment of luxury and innovation. This flagship sedan is the epitome of elegance and comfort, setting new standards in automotive excellence. The Mercedes-Benz S-Class boasts cutting-edge technology, making every journey a seamless and sophisticated experience.Step inside the opulent interior, and you'll be surrounded by the finest materials and craftsmanship. The S-Class offers unparalleled comfort, with its spacious cabin and premium amenities, ensuring a first-class ride for both driver and passengers.The sophisticated design of this car exudes prestige and style, with its iconic grille and sleek lines. Its advanced suspension and intelligent driving systems provide a smooth and confident ride, making it a pleasure to drive on any road.Safety is a top priority, and the Mercedes-Benz S-Class comes equipped with the latest safety features to provide peace of mind on every drive.This 2022 Mercedes-Benz S-Class is meticulously maintained and in pristine condition, ready to offer you the ultimate luxury driving experience. Don't miss the opportunity to own this pinnacle of automotive engineering. Contact us now to arrange a test drive and make this extraordinary car yours today.",
        "description": "The Mercedes-Benz S-Class is the epitome of luxury and sophistication. As a flagship sedan, it sets the standard for automotive excellence. The 2022 model showcases cutting-edge technology and a powerful yet efficient hybrid powertrain. With 496 horsepower under the hood, the S-Class delivers a smooth and refined driving experience. The interior is a haven of opulence, featuring top-notch materials, spaciousness, and the latest advancements in comfort and safety. Whether you're driving or being chauffeured, the S-Class offers an unparalleled level of comfort and elegance. Owning a Mercedes-Benz S-Class means embracing automotive refinement and prestige."
    },
    {
        "id": 9,
        "date": "02:45, 05 August 2023",
        "account": "rolan@gmail.com",
        "accountName": "Rolan",
        "number": "847586937",
        "veryfied": "Veryfied",
        "city": "Bialystok",
        "company": "BMW",
        "model": "8 Series",
        "image": "bmw.jpg",
        "images": {
            "one": "bmw02.jpg",
            "two": "bmw03.jpg"
        },
        "year": 2020,
        "mileage": 7000,
        "fuel": "petrol",
        "power": 523,
        "engine": "4400",
        "doors": "4/5",
        "seats": "4",
        "color": "Blue",
        "country": "Poland",
        "registered": "Yes",
        "vin": "36456744",
        "price": 93600,
        "sellerInfo": "For sale is a stunning 2020 BMW 8 Series, a perfect blend of luxury and performance. This high-end coupe offers a thrilling driving experience, thanks to its powerful engine and agile handling. The BMW 8 Series is designed to turn heads with its sleek and sporty design, making a bold statement on the road.Step inside the sophisticated interior, and you'll be greeted by premium materials and modern technology. The BMW 8 Series is equipped with the latest infotainment and driver-assistance features, ensuring a connected and convenient journey.The dynamic driving capabilities of this car deliver an adrenaline-pumping ride, making it a joy to navigate winding roads or cruise on the highway. Its precise steering and responsive brakes provide a sense of control and confidence behind the wheel.Safety is a top priority, and the BMW 8 Series is packed with advanced safety features to keep you and your passengers protected.This 2020 BMW 8 Series is meticulously maintained and in pristine condition, ready to provide you with the ultimate driving pleasure. Don't miss the chance to own this luxurious and high-performance coupe. Contact us now to schedule a test drive and make this extraordinary car yours today.",
        "description": "The BMW 8 Series is a stunning combination of luxury and performance. With its powerful 523-horsepower petrol engine, it offers an exhilarating driving experience. The 8 Series boasts a sleek and athletic design that captures attention wherever it goes. Inside the cabin, you'll find a perfect blend of opulence and modern technology, creating a comfortable and connected environment. This grand tourer is ideal for both long journeys and spirited drives on winding roads. Owning a BMW 8 Series means embracing the ultimate driving pleasure and being part of the brand's rich motorsport heritage."
    },
    {
        "id": 10,
        "date": "12:45, 12 August 2023",
        "account": "sebastian@gmail.com",
        "accountName": "Sebastian",
        "number": "102837485",
        "veryfied": "Veryfied",
        "city": "Warsaw",
        "company": "Lexus",
        "model": "LS",
        "image": "lexus.jpg",
        "images": {
            "one": "lexus02.jpg",
            "two": "lexus03.jpg"
        },
        "year": 2022,
        "mileage": 3000,
        "fuel": "hybrid",
        "power": 416,
        "engine": "3500",
        "doors": "4/5",
        "seats": "4",
        "color": "Black",
        "country": "Poland",
        "registered": "Yes",
        "vin": "4673423734",
        "price": 112000,
        "sellerInfo": "For sale is an exquisite 2022 Lexus LS, a perfect fusion of luxury and refinement. This flagship sedan exemplifies elegance and sophistication, offering a serene and comfortable driving experience. The Lexus LS is equipped with a powerful engine, delivering a smooth and powerful ride.Step inside the opulent interior, and you'll be surrounded by the finest craftsmanship and attention to detail. The Lexus LS provides a spacious and serene cabin, with premium amenities to ensure a first-class journey for both driver and passengers.The sleek and stylish design of this car exudes prestige and modernity, with its signature Lexus spindle grille and graceful lines. Its advanced suspension system and adaptive variable air suspension guarantee a comfortable and controlled ride, even on rough roads.The Lexus LS prioritizes safety, with advanced driver-assistance features and a comprehensive array of safety systems.This 2022 Lexus LS is meticulously maintained and in impeccable condition, ready to offer you the pinnacle of luxury driving. Don't miss the opportunity to own this exceptional sedan. Contact us now to schedule a test drive and make this extraordinary car yours today.",
        "description": "The Lexus LS is a luxury sedan that combines refined elegance with innovative technology. The 2022 model features a powerful yet efficient hybrid powertrain, delivering 416 horsepower for a smooth and responsive ride. The LS exudes sophistication, with a striking design that reflects Japanese craftsmanship at its finest. Inside, the cabin envelops you in premium materials, providing a serene and comfortable environment. Advanced safety features and driver-assistance systems ensure a secure driving experience. The Lexus LS caters to those who seek tranquility and style, offering a unique alternative to European luxury sedans."
    },
    {
        "id": 11,
        "date": "12:45, 12 August 2023",
        "account": "clever@gmail.com",
        "accountName": "Clever",
        "number": "857364756",
        "veryfied": "Non-Veryfied",
        "city": "Olsztynek",
        "company": "Audi",
        "model": "R8",
        "image": "audi.jpg",
        "images": {
            "one": "audi02.jpg",
            "two": "audi03.jpg"
        },
        "year": 2021,
        "mileage": 7000,
        "fuel": "petrol",
        "power": 620,
        "engine": "5200",
        "doors": "3/4",
        "seats": "2",
        "color": "Grey",
        "country": "Poland",
        "registered": "Yes",
        "vin": "34645732",
        "price": 186200,
        "sellerInfo": "For sale is a stunning 2021 Audi R8, a true sports car that combines power and elegance. This high-performance machine is designed to deliver an exhilarating driving experience. The Audi R8 boasts a powerful V10 engine, producing a heart-pounding acceleration and an adrenaline-pumping ride.Step inside the driver-focused cockpit, and you'll be immersed in a world of luxury and cutting-edge technology. The Audi R8 offers a comfortable and refined interior, equipped with the latest infotainment and driver-assistance features.The sleek and aerodynamic design of this car is a masterpiece, with its iconic Audi Singleframe grille and sharp lines. Its quattro all-wheel drive system ensures precise handling and traction on any road.Safety is a top priority, and the Audi R8 is equipped with advanced safety features to provide peace of mind on every journey.This 2021 Audi R8 is meticulously maintained and in pristine condition, ready to provide you with an unforgettable driving experience. Don't miss the opportunity to own this extraordinary sports car. Contact us now to schedule a test drive and make this exceptional car yours today.",
        "description": "The Audi R8 is a high-performance sports car that excites with both its stunning design and exhilarating driving dynamics. Powered by a 620-horsepower petrol engine, the R8 sprints from 0 to 60 mph in breathtaking speed. Its quattro all-wheel-drive system ensures exceptional traction, making it a supercar that can be driven with confidence in any weather condition. The R8's interior is a blend of sportiness and luxury, enveloping the driver in a cockpit designed for maximum engagement. Driving an Audi R8 is an experience that ignites the senses and reaffirms Audi's commitment to automotive excellence and innovation."
    },
    {
        "id": 12,
        "date": "15:45, 17 August 2023",
        "account": "arnold@gmail.com",
        "accountName": "Arnold",
        "number": "938475867",
        "veryfied": "Non-Veryfied",
        "city": "Zakopane",
        "company": "Jaguar",
        "model": "F-Type",
        "image": "jaguar.jpg",
        "images": {
            "one": "jaguar02.jpg",
            "two": "jaguar03.jpg"
        },
        "year": 2020,
        "mileage": 5000,
        "fuel": "petrol",
        "power": 380,
        "engine": "5000",
        "doors": "3/4",
        "seats": "2",
        "color": "Black",
        "country": "Poland",
        "registered": "Yes",
        "vin": "345645734",
        "price": 95300,
        "sellerInfo": "For sale is a captivating 2020 Jaguar F-Type, a true embodiment of luxury and performance. This sleek sports car is designed to deliver an exhilarating driving experience. The Jaguar F-Type is powered by a dynamic engine, offering impressive acceleration and precise handling on the road.Step inside the refined interior, and you'll be greeted by a driver-focused cockpit adorned with premium materials. The Jaguar F-Type offers a comfortable and sophisticated cabin, equipped with modern technology and entertainment features.The striking design of this car exudes elegance and sportiness, with its iconic Jaguar grille and sleek lines. Its agile suspension and responsive steering provide a thrilling and engaging ride, making every drive a joy.Safety is a top priority, and the Jaguar F-Type is equipped with advanced safety features to ensure your peace of mind.This 2020 Jaguar F-Type is meticulously maintained and in pristine condition, ready to provide you with a truly extraordinary driving experience. Don't miss the opportunity to own this exceptional sports car. Contact us now to schedule a test drive and make this stunning car yours today.",
        "description": "The Jaguar F-Type is a beautiful sports car that combines British elegance with thrilling performance. The 2020 model features a 380-horsepower petrol engine, providing exhilarating acceleration and a distinctive exhaust note. The F-Type's design is a nod to Jaguar's heritage, with sleek lines and a muscular stance. Inside the cabin, you'll find a driver-focused cockpit with premium materials and modern infotainment. Whether you're cruising on scenic roads or challenging the limits on the track, the Jaguar F-Type delivers a dynamic and engaging driving experience. Owning an F-Type means joining a legacy of iconic sports cars and embracing the passion of driving."
    },
    {
        "id": 13,
        "date": "15:45, 13 August 2023",
        "account": "keyne@gmail.com",
        "accountName": "Keyne",
        "number": "283018475",
        "veryfied": "Non-Veryfied",
        "city": "Warsaw",
        "company": "Maserati",
        "model": "GranTurismo",
        "image": "maseratti.jpg",
        "images": {
            "one": "maseratti02.jpg",
            "two": "maseratti03.jpg"
        },
        "year": 2021,
        "mileage": 6000,
        "fuel": "petrol",
        "power": 454,
        "engine": "4700",
        "doors": "3/4",
        "seats": "4",
        "color": "Silver",
        "country": "Poland",
        "registered": "Yes",
        "vin": "23463425346",
        "price": 144000,
        "sellerInfo": "For sale is an exquisite 2021 Maserati GranTurismo, a true masterpiece of Italian luxury and performance. This stunning sports car is designed to captivate both the eyes and the soul. The Maserati GranTurismo is powered by a powerful engine, delivering an exhilarating driving experience with its remarkable acceleration and agile handling.Step inside the lavish interior, and you'll be embraced by the finest craftsmanship and opulent materials. The Maserati GranTurismo offers a luxurious and comfortable cabin, equipped with modern technology and convenience features.The sleek and aerodynamic design of this car exudes sophistication and elegance, with its signature Maserati grille and timeless curves. Its adaptive suspension and precise steering ensure a smooth and controlled ride, making it a pleasure to drive on any road.Safety is paramount, and the Maserati GranTurismo is equipped with advanced safety features to provide confidence and security during your journeys.This 2021 Maserati GranTurismo is meticulously maintained and in pristine condition, ready to provide you with an unforgettable driving experience. Don't miss the opportunity to own this exceptional sports car. Contact us now to schedule a test drive and make this extraordinary car yours today.",
        "description": "The Maserati GranTurismo is a true Italian masterpiece that blends performance and elegance. Its 454-horsepower petrol engine delivers a symphony of sound and impressive acceleration. The GranTurismo's design is a captivating combination of modernity and timeless styling, showcasing the brand's passion for aesthetics. Inside the luxurious cabin, you'll find a perfect balance of craftsmanship and technology. This grand tourer is engineered for long-distance journeys, where comfort and excitement harmoniously coexist. Driving the Maserati GranTurismo is an experience that captures the soul of Italian motoring heritage and leaves a lasting impression on every road it graces."
    },
    {
        "id": 14,
        "date": "17:45, 14 August 2023",
        "account": "ola@gmail.com",
        "accountName": "Ola",
        "number": "910375038",
        "veryfied": "Non-Veryfied",
        "city": "Gdynia",
        "company": "McLaren",
        "model": "570S",
        "image": "mclaren.jpg",
        "images": {
            "one": "mclaren02.jpg",
            "two": "mclaren03.jpg"
        },
        "year": 2022,
        "mileage": 3000,
        "fuel": "petrol",
        "power": 562,
        "engine": "3800",
        "doors": "4/5",
        "seats": "2",
        "color": "Red",
        "country": "Poland",
        "registered": "Yes",
        "vin": "346343754",
        "price": 252000,
        "sellerInfo": "For sale is an extraordinary 2022 McLaren 570S, a true epitome of automotive excellence. This high-performance supercar is designed to deliver a thrilling driving experience like no other. The McLaren 570S is powered by a potent engine, providing blistering acceleration and precise handling on the road.Step inside the driver-centric cockpit, and you'll be immersed in luxury and cutting-edge technology. The McLaren 570S offers a comfortable and modern interior, equipped with advanced infotainment and driver-assistance features.The striking design of this car exudes aerodynamic beauty and performance, with its signature dihedral doors and sleek lines. Its carbon-fiber chassis and adaptive suspension system ensure a dynamic and responsive ride, making every drive an adrenaline-filled adventure.Safety is a top priority, and the McLaren 570S comes equipped with advanced safety features to provide peace of mind during high-speed drives.This 2022 McLaren 570S is meticulously maintained and in impeccable condition, ready to offer you the ultimate supercar experience. Don't miss the chance to own this exceptional masterpiece of engineering. Contact us now to schedule a test drive and make this extraordinary car yours today.",
        "description": "The McLaren 570S is a supercar that exemplifies British engineering prowess and performance. With its 562-horsepower petrol engine, the 570S is an adrenaline-pumping thrill ride on both the track and the road. Its sleek and aerodynamic design not only turns heads but also enhances its driving dynamics. Step inside, and you'll be greeted by a driver-focused cockpit filled with lightweight materials and cutting-edge technology. Every element is engineered with precision to maximize the driving experience. Owning a McLaren 570S means embracing the spirit of motorsport and experiencing the art of driving a finely-tuned performance machine."
    },
    {
        "id": 15,
        "date": "18:00, 20 August 2023",
        "account": "marianna@gmail.com",
        "accountName": "Marianna",
        "number": "309480581",
        "veryfied": "Non-Veryfied",
        "city": "Olsztyn",
        "company": "Alfa Romeo",
        "model": "Giulia Quadrifoglio",
        "image": "alfaromeo.jpg",
        "images": {
            "one": "alfaromeo02.jpg",
            "two": "alfaromeo03.jpg"
        },
        "year": 2020,
        "mileage": 5000,
        "fuel": "petrol",
        "power": 505,
        "engine": "2900",
        "doors": "3/4",
        "seats": "2",
        "color": "Blue",
        "country": "Poland",
        "registered": "Yes",
        "vin": "2343734",
        "price": 95000,
        "sellerInfo": "For sale is a stunning 2020 Alfa Romeo Giulia, a perfect combination of style and performance. This Italian masterpiece is designed to provide an exhilarating driving experience. The Alfa Romeo Giulia is powered by a dynamic engine, offering impressive acceleration and precise handling on the road.Step inside the luxurious interior, and you'll be embraced by the finest Italian craftsmanship and attention to detail. The Alfa Romeo Giulia offers a comfortable and sophisticated cabin, equipped with modern technology and convenience features.The sleek and elegant design of this car exudes sophistication and class, with its iconic Alfa Romeo grille and sleek lines. Its advanced suspension and responsive steering ensure a thrilling and engaging ride, making every drive a joy.Safety is a top priority, and the Alfa Romeo Giulia is equipped with advanced safety features to provide peace of mind.This 2020 Alfa Romeo Giulia is meticulously maintained and in pristine condition, ready to provide you with a truly extraordinary driving experience. Don't miss the opportunity to own this exceptional Italian beauty. Contact us now to schedule a test drive and make this stunning car yours today.",
        "description": "The Alfa Romeo Giulia Quadrifoglio is an Italian sports sedan that embodies passion and excitement. Its 505-horsepower petrol engine delivers impressive power and thrilling acceleration. The Quadrifoglio's striking design showcases Alfa Romeo's racing heritage, with a perfect blend of aerodynamics and style. Inside the driver-centric cabin, you'll find premium materials and advanced technology for a connected and enjoyable driving experience. The Giulia Quadrifoglio excels both as a daily driver and a track-focused performer. Embracing the Alfa Romeo spirit means immersing yourself in a legacy of automotive artistry and a dedication to delivering a pure and emotional driving experience."
    },
    {
        "id": 16,
        "date": "18:00, 25 August 2023",
        "account": "tomasz@gmail.com",
        "accountName": "Tomasz",
        "number": "938405687",
        "veryfied": "Non-Veryfied",
        "city": "Warsaw",
        "company": "Lotus",
        "model": "Evora",
        "image": "lotus.jpg",
        "images": {
            "one": "lotus02.jpg",
            "two": "lotus03.jpg"
        },
        "year": 2021,
        "mileage": 4000,
        "fuel": "petrol",
        "power": 416,
        "engine": "3500",
        "doors": "3/4",
        "seats": "2",
        "color": "Grey",
        "country": "Poland",
        "registered": "Yes",
        "vin": "53643473453",
        "price": 120500,
        "sellerInfo": "For sale is an exceptional 2021 Lotus Evora, a true sports car that delivers thrilling performance. This British beauty is designed to provide an adrenaline-pumping driving experience. The Lotus Evora is powered by a high-performance engine, offering quick acceleration and agile handling on the road.Step inside the driver-focused cockpit, and you'll be immersed in a world of driving excitement. The Lotus Evora offers a lightweight and driver-centric interior, equipped with modern technology and racing-inspired features.The striking design of this car exudes aerodynamic elegance, with its sleek lines and distinctive Lotus front grille. Its sports-tuned suspension and responsive steering ensure precise control and agility, making it a joy to drive on any road.Safety is paramount, and the Lotus Evora is equipped with advanced safety features to provide confidence during spirited drives.This 2021 Lotus Evora is meticulously maintained and in pristine condition, ready to provide you with an extraordinary driving experience. Don't miss the opportunity to own this exceptional sports car. Contact us now to schedule a test drive and make this thrilling car yours today.",
        "description": "The Lotus Evora is a lightweight sports car that embodies the essence of driving purity. With a 416-horsepower petrol engine, the Evora delivers an engaging and responsive driving experience. Lotus' dedication to lightweight engineering ensures nimble handling and agility on twisty roads. The Evora's exterior design is sleek and aerodynamic, reflecting its focus on performance. Inside, the cockpit is driver-focused, with supportive seats and minimalist controls. Driving a Lotus Evora is an experience that connects you with the road and instills a sense of driving confidence. Embracing the Lotus brand means being part of a community that values the joy of driving and the thrill of automotive craftsmanship."
    },
    {
        "id": 17,
        "date": "18:00, 20 August 2023",
        "account": "anika@gmail.com",
        "accountName": "Anika",
        "number": "908790689",
        "veryfied": "Non-Veryfied",
        "city": "Lublin",
        "company": "Acura",
        "model": "NSX",
        "image": "honda.jpg",
        "images": {
            "one": "honda02.jpg",
            "two": "honda03.jpg"
        },
        "year": 2022,
        "mileage": 2000,
        "fuel": "hybrid",
        "power": 573,
        "engine": "3500",
        "doors": "3/4",
        "seats": "2",
        "color": "Grey",
        "country": "Poland",
        "registered": "Yes",
        "vin": "90463788273",
        "price": 181000,
        "sellerInfo": "For sale is an exquisite 2022 Acura NSX, a true embodiment of precision and performance. This high-performance sports car is designed to deliver an exhilarating driving experience. The Acura NSX is equipped with a hybrid powertrain, combining a twin-turbocharged V6 engine with three electric motors, providing impressive acceleration and responsive handling on the road.Step inside the driver-oriented cockpit, and you'll be surrounded by cutting-edge technology and luxurious materials. The Acura NSX offers a comfortable and modern interior, equipped with the latest infotainment and driver-assistance features.The striking design of this car exudes aerodynamic beauty and boldness, with its distinctive jewel-eye LED headlights and sleek lines. Its sport-tuned suspension and Super Handling All-Wheel Drive (SH-AWD) system ensure precise control and superior handling around corners, making every drive a thrilling adventure.Safety is a top priority, and the Acura NSX comes equipped with advanced safety features to provide peace of mind during high-speed drives. This 2022 Acura NSX is meticulously maintained and in impeccable condition, ready to offer you the ultimate sports car experience. Don't miss the chance to own this exceptional masterpiece of engineering. Contact us now to schedule a test drive and make this extraordinary car yours today.",
        "description": "The Acura NSX is a hybrid supercar that fuses cutting-edge technology with exhilarating performance. Its 573-horsepower hybrid powertrain delivers impressive acceleration and precise handling. The NSX's sleek and aggressive design reflects its supercar status, while its advanced aerodynamics enhance stability at high speeds. Inside the cabin, you'll find a driver-oriented layout with premium materials and modern conveniences. The NSX's hybrid system adds an eco-friendly aspect to the supercar world, showcasing Acura's commitment to sustainable performance. Driving an Acura NSX means embracing innovation and experiencing the thrill of a high-performance machine with a conscience."
    },
    {
        "id": 18,
        "date": "18:00, 10 August 2023",
        "account": "andrew@gmail.com",
        "accountName": "Andrew",
        "number": "906907906",
        "veryfied": "Non-Veryfied",
        "city": "Poznan",
        "company": "Infiniti",
        "model": "Q60",
        "image": "infinity.jpg",
        "images": {
            "one": "infinity02.jpg",
            "two": "infinity03.jpg"
        },
        "year": 2021,
        "mileage": 6000,
        "fuel": "petrol",
        "power": 400,
        "engine": "3000",
        "doors": "3/4",
        "seats": "4",
        "color": "Grey",
        "country": "Poland",
        "registered": "Yes",
        "vin": "345634573553",
        "price": 91500,
        "sellerInfo": "For sale is a stunning 2021 Infiniti Q60, a perfect blend of luxury and performance. This sleek and stylish coupe is designed to turn heads and provide an exhilarating driving experience. The Infiniti Q60 is powered by a potent engine, delivering impressive acceleration and agile handling on the road. Step inside the premium interior, and you'll be surrounded by sophistication and modern technology. The Infiniti Q60 offers a comfortable and refined cabin, equipped with the latest infotainment and convenience features. The striking design of this car exudes elegance and sportiness, with its distinctive Infiniti grille and sleek lines. Its dynamic digital suspension and Direct Adaptive Steering ensure a smooth and responsive ride, making every drive a pleasure. Safety is a top priority, and the Infiniti Q60 comes equipped with advanced safety features to provide peace of mind on every journey. This 2021 Infiniti Q60 is meticulously maintained and in pristine condition, ready to provide you with an unforgettable driving experience. Don't miss the opportunity to own this exceptional coupe. Contact us now to schedule a test drive and make this extraordinary car yours today.",
        "description": "The Infiniti Q60 is a stylish and dynamic coupe that offers a compelling blend of performance and comfort. Its 400-horsepower petrol engine provides strong acceleration and a sporty driving experience. The Q60's design is a balance of elegance and aggression, capturing attention from every angle. Inside, the cabin exudes a luxurious ambiance with premium materials and modern technology. The Q60 is an enjoyable daily driver, yet it has the sporty character to satisfy enthusiasts. Infiniti's attention to detail and craftsmanship shine through in every aspect of this coupe, making it a great choice for those seeking a sporty and refined driving experience."
    },
    {
        "id": 19,
        "date": "19:00, 26 August 2023",
        "account": "elon@gmail.com",
        "accountName": "Elon",
        "number": "906905904",
        "veryfied": "Non-Veryfied",
        "city": "Warsaw",
        "company": "Lincoln",
        "model": "Continental",
        "image": "lincoln.jpg",
        "images": {
            "one": "lincoln02.jpg",
            "two": "lincoln03.jpg"
        },
        "year": 2022,
        "mileage": 5000,
        "fuel": "hybrid",
        "power": 400,
        "engine": "3000",
        "doors": "4/5",
        "seats": "5",
        "color": "Black",
        "country": "Poland",
        "registered": "Yes",
        "vin": "36456744",
        "price": 94900,
        "sellerInfo": "For sale is a magnificent 2022 Lincoln Continental, a true embodiment of luxury and comfort. This elegant sedan is designed to provide a refined and sophisticated driving experience. The Lincoln Continental is powered by a smooth and powerful engine, offering a serene and responsive ride on the road. Step inside the opulent interior, and you'll be embraced by the finest materials and craftsmanship. The Lincoln Continental offers a spacious and comfortable cabin, equipped with modern technology and convenience features. The classic design of this car exudes elegance and timeless beauty, with its signature Lincoln grille and graceful lines. Its adaptive suspension and optional all-wheel drive ensure a smooth and controlled ride, making every drive a relaxing and enjoyable journey. Safety is a top priority, and the Lincoln Continental comes equipped with advanced safety features to provide confidence and security during your travels. This 2022 Lincoln Continental is meticulously maintained and in impeccable condition, ready to offer you the pinnacle of luxury driving. Don't miss the opportunity to own this exceptional sedan. Contact us now to schedule a test drive and make this extraordinary car yours today.",
        "description": "The Lincoln Continental is a premium luxury sedan that offers refined elegance and modern technology. With a hybrid powertrain delivering 400 horsepower, it provides a smooth and quiet driving experience, complementing its serene interior. The Continental's design showcases a harmonious blend of classic elements and contemporary styling. Inside, you'll find a spacious and comfortable cabin, featuring high-quality materials and advanced infotainment options. This luxury sedan is designed for comfort and relaxation on long journeys, making it an ideal choice for executives and those seeking a peaceful driving environment. Driving a Lincoln Continental is a statement of sophisticated luxury and an appreciation for timeless automotive design."
    },
    {
        "id": 20,
        "date": "18:00, 20 August 2023",
        "account": "mark@gmail.com",
        "accountName": "Mark",
        "number": "805803802",
        "veryfied": "Non-Veryfied",
        "city": "olsztyn",
        "company": "Chevrolet",
        "model": "Corvette",
        "image": "corvette.jpg",
        "images": {
            "one": "corvette02.jpg",
            "two": "corvette03.jpg"
        },
        "year": 2022,
        "mileage": 5000,
        "fuel": "petrol",
        "power": 490,
        "engine": "6200",
        "doors": "3/4",
        "seats": "2",
        "color": "Orange",
        "country": "Poland",
        "registered": "Yes",
        "vin": "3453463",
        "price": 99000,
        "sellerInfo": "For sale is a remarkable 2022 Chevrolet Corvette, a true American sports car that combines power and style. This high-performance machine is designed to deliver an exhilarating driving experience. The Chevrolet Corvette is powered by a potent V8 engine, offering thrilling acceleration and precise handling on the road. Step inside the driver-focused cockpit, and you'll be greeted by a modern and driver-centric interior. The Chevrolet Corvette offers a comfortable and tech-savvy cabin, equipped with the latest infotainment and convenience features. The striking design of this car exudes boldness and aerodynamic elegance, with its iconic Corvette Stingray silhouette and sharp lines. Its advanced suspension and Magnetic Selective Ride Control ensure a smooth and responsive ride, making every drive a thrilling adventure. Safety is a top priority, and the Chevrolet Corvette comes equipped with advanced safety features to provide peace of mind during high-speed drives. This 2022 Chevrolet Corvette is meticulously maintained and in pristine condition, ready to provide you with an unforgettable driving experience. Don't miss the opportunity to own this exceptional American sports car. Contact us now to schedule a test drive and make this extraordinary car yours today.",
        "description": "The Chevrolet Corvette is an American sports car icon that epitomizes performance and style. The 2022 model boasts a 490-horsepower petrol engine, ensuring thrilling acceleration and track-ready dynamics. The Corvette's striking design exudes a sense of speed, and its removable roof panel allows for an open-air driving experience. Inside the cockpit, you'll find a driver-centric layout with modern technology and supportive seats. The Corvette is a formidable performer both on the racetrack and everyday roads, delivering the joy of driving in its purest form. Owning a Chevrolet Corvette means joining a passionate community of enthusiasts and embracing the spirit of American muscle and performance engineering."
    }
];
const data = JSON.parse(JSON.stringify(jsonFromApi));
const currentItem = data.find((object: any) => object.id == props.id);

const veryfiedColor = currentItem.veryfied === "Veryfied" ? "text-success" : "text-danger";

const similarAds = ref([]);
const findSimilarAds = () => {
    for (let i = 0; i < 6;) {
        const drawNumber = Math.floor(Math.random() * data.length);
        const drawItem = data[drawNumber];
        if (similarAds.value.includes(drawItem) === false) {
            similarAds.value.push(drawItem);
            i++;
        }
    }
}

findSimilarAds();

</script>
<template>
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
        <div class="row">
            <div class="col-9">
                <ImageSlider :image="currentItem.image" :images="currentItem.images" :id="props.id" />
                <Details :company="currentItem.company" :model="currentItem.model" :year="currentItem.year"
                    :mileage="currentItem.mileage" :fuel="currentItem.fuel" :power="currentItem.power"
                    :engine="currentItem.engine" :doors="currentItem.doors" :seats="currentItem.seats"
                    :color="currentItem.color" :country="currentItem.country" :registered="currentItem.registered"
                    :vin="currentItem.vin" />
                <Descriptions :sellerInfo="currentItem.sellerInfo" :description="currentItem.dedication" />
                <Map :city="currentItem.city" />
                <SellerInformation :accountName="currentItem.accountName" :number="currentItem.number"
                    :veryfiedColor="veryfiedColor" :veryfied="currentItem.veryfied" />
            </div>
            <div class="col-3">
                <TopHeaderDetails :company="currentItem.company" :model="currentItem.model" :price="currentItem.price"
                    :accountName="currentItem.accountName" :number="currentItem.number" :veryfied="currentItem.veryfied"
                    :city="currentItem.city" :date="currentItem.date" :id="props.id" :veryfiedColor="veryfiedColor"
                    :handleButtonClick="activeNumber" />
                <div class="row">
                    <div class="col-12">
                        <p class="kanit h6 pt-3 text-center"><b>You may also be interested</b></p>
                    </div>
                </div>
                <div class="row row-custom">
                    <SimilarAdsPattern v-for="car in similarAds" :col="'col-12'" :company="car.company" :model="car.model"
                        :year="car.year" :price="car.price" :image="car.image" :id="props.id" :mileage="car.mileage" />
                </div>
            </div>
        </div>
        <div class="row pt-5">
            <div class="col-12">
                <p class="kanit h5 pt-3"><b>Similar ads</b></p>
            </div>
            <SimilarAdsPattern v-for="car in similarAds" :col="'col-2'" :company="car.company" :model="car.model"
                :year="car.year" :price="car.price" :image="car.image" :id="props.id" :mileage="car.mileage" />
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