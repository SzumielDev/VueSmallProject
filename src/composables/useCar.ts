import axios from "axios";
import { ref } from "vue";

const useCar = (id: number) => {
    const car = ref<null|any>(null);
    const similarCars = ref<any[]>([]);

    const fetchCarData = async (id: number) => {
        const {car: carFromApi, similarCars: similarCarsFromApi} = (await axios.get(`http://localhost:3000/cars/${id}`)).data;
        await setTimeout(() => {
            car.value = carFromApi;
            similarCars.value = similarCarsFromApi;
        }, 1000);
    }

    return { car, similarCars, fetchCarData };
}

export default useCar;