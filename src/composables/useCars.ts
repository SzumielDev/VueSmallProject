import axios from "axios";
import { ref } from "vue";

const useCars = () => {
    const cars = ref([]);

    const featuredCars = ref([]);

    const fetchFeaturedCarsData = async (sortingKey?: string| null) => {
        featuredCars.value = (await axios.get('http://localhost:3000/cars/featured', {
            params: {
                sortingKey: sortingKey
            }
        })).data
    }

    const fetchCarData = async (sortingKey?: string| null) => {
        cars.value = (await axios.get('http://localhost:3000/cars', {
            params: {
                sortingKey: sortingKey
            }
        })).data
    }

    return { cars, fetchCarData, featuredCars, fetchFeaturedCarsData };
}

export default useCars;