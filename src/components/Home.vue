<script setup lang="ts">

const jsonFromApi = [
  {
    "id": 1,
    "company": "Tesla",
    "model": "Model S",
    "image": "./assets/tesla.jpg",
    "year": 2022,
    "mileage": 10000,
    "fuel": "electric",
    "power": 450,
    "price": 91300
  },
  {
    "id": 2,
    "company": "Porsche",
    "model": "911",
    "image": "./assets/porsche.jpg",
    "year": 2021,
    "mileage": 8000,
    "fuel": "petrol",
    "power": 600,
    "price": 120500
  },
  {
    "id": 3,
    "company": "Ferrari",
    "model": "488 GTB",
    "image": "./assets/ferrari.jpg",
    "year": 2020,
    "mileage": 5000,
    "fuel": "petrol",
    "power": 670,
    "price": 256000
  },
  {
    "id": 4,
    "company": "Lamborghini",
    "model": "Huracan",
    "image": "./assets/lambo.jpg",
    "year": 2022,
    "mileage": 3000,
    "fuel": "petrol",
    "power": 630,
    "price": 299000
  },
  {
    "id": 5,
    "company": "Aston Martin",
    "model": "DB11",
    "image": "./assets/aston.jpg",
    "year": 2021,
    "mileage": 6000,
    "fuel": "petrol",
    "power": 600,
    "price": 184000
  },
  {
    "id": 6,
    "company": "Bentley",
    "model": "Continental GT",
    "image": "./assets/bentley.jpg",
    "year": 2022,
    "mileage": 4000,
    "fuel": "petrol",
    "power": 626,
    "price": 219000
  },
  {
    "id": 7,
    "company": "Rolls-Royce",
    "model": "Ghost",
    "image": "./assets/royce.jpg",
    "year": 2021,
    "mileage": 5000,
    "fuel": "petrol",
    "power": 563,
    "price": 329000
  },
  {
    "id": 8,
    "company": "Mercedes-Benz",
    "model": "S-Class",
    "image": "./assets/mercedes.jpg",
    "year": 2022,
    "mileage": 2000,
    "fuel": "hybrid",
    "power": 496,
    "price": 125000
  },
  {
    "id": 9,
    "company": "BMW",
    "model": "8 Series",
    "image": "./assets/bmw.jpg",
    "year": 2020,
    "mileage": 7000,
    "fuel": "petrol",
    "power": 523,
    "price": 93600
  },
  {
    "id": 10,
    "company": "Lexus",
    "model": "LS",
    "image": "./assets/lexus.jpg",
    "year": 2022,
    "mileage": 3000,
    "fuel": "hybrid",
    "power": 416,
    "price": 112000
  },
  {
    "id": 11,
    "company": "Audi",
    "model": "R8",
    "image": "./assets/audi.jpg",
    "year": 2021,
    "mileage": 7000,
    "fuel": "petrol",
    "power": 620,
    "price": 186200
  },
  {
    "id": 12,
    "company": "Jaguar",
    "model": "F-Type",
    "image": "./assets/jaguar.jpg",
    "year": 2020,
    "mileage": 5000,
    "fuel": "petrol",
    "power": 380,
    "price": 95300
  },
  {
    "id": 13,
    "company": "Maserati",
    "model": "GranTurismo",
    "image": "./assets/maseratti.jpg",
    "year": 2021,
    "mileage": 6000,
    "fuel": "petrol",
    "power": 454,
    "price": 144000
  },
  {
    "id": 14,
    "company": "McLaren",
    "model": "570S",
    "image": "./assets/mclaren.jpg",
    "year": 2022,
    "mileage": 3000,
    "fuel": "petrol",
    "power": 562,
    "price": 252000
  },
  {
    "id": 15,
    "company": "Alfa Romeo",
    "model": "Giulia Quadrifoglio",
    "image": "./assets/alfaromeo.jpg",
    "year": 2020,
    "mileage": 5000,
    "fuel": "petrol",
    "power": 505,
    "price": 95000
  },
  {
    "id": 16,
    "company": "Lotus",
    "model": "Evora",
    "image": "./assets/lotus.jpg",
    "year": 2021,
    "mileage": 4000,
    "fuel": "petrol",
    "power": 416,
    "price": 120500
  },
  {
    "id": 17,
    "company": "Acura",
    "model": "NSX",
    "image": "./assets/honda.jpg",
    "year": 2022,
    "mileage": 2000,
    "fuel": "hybrid",
    "power": 573,
    "price": 181000
  },
  {
    "id": 18,
    "company": "Infiniti",
    "model": "Q60",
    "image": "./assets/infiniti.jpg",
    "year": 2021,
    "mileage": 6000,
    "fuel": "petrol",
    "power": 400,
    "price": 91500
  },
  {
    "id": 19,
    "company": "Lincoln",
    "model": "Continental",
    "image": "./assets/lincoln.jpg",
    "year": 2022,
    "mileage": 5000,
    "fuel": "hybrid",
    "power": 400,
    "price": 94900
  },
  {
    "id": 20,
    "company": "Chevrolet",
    "model": "Corvette",
    "image": "./assets/corvette.jpg",
    "year": 2022,
    "mileage": 5000,
    "fuel": "petrol",
    "power": 490,
    "price": 99000
  }
];

const data = JSON.parse(JSON.stringify(jsonFromApi));

</script>
<template>
    <h1>Home</h1>
</template>

<style scoped>
</style>