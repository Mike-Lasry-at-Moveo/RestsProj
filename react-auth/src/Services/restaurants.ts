import axios from 'axios';
import { Path } from 'Interfaces/Enums';
import IRestaurant from 'Interfaces/Restaurant';
import IUpdate from 'Interfaces/Update';


const getAllRestaurants = async () => {
    return axios.get(`${Path.BASE_URL}/${Path.RESTS_SFX}`);
}

const searchRestaurants = async (searchString: string) => {
    return axios.post(`${Path.BASE_URL}/${Path.RESTS_SFX}/${Path.SEARCH_SFX}`, {contains: searchString});
}

const getRestaurantById = async (id: string) => { 
    return axios.get(`${Path.BASE_URL}/${Path.RESTS_SFX}/${id}`);
}

const updateRestaurant = async (id: string, update: IUpdate) => {
    return axios.patch(`${Path.BASE_URL}/${Path.RESTS_SFX}/${id}`, update);
 }

const createRestaurant = async (restaurant: IRestaurant) => { 
    return axios.post(`${Path.BASE_URL}/${Path.RESTS_SFX}`, restaurant);
}

const deleteRestaurant = async (id: string) => { 
    return axios.delete(`${Path.BASE_URL}/${Path.RESTS_SFX}/${id}`)
}


const restaurantsService = {
    getAllRestaurants,
    getRestaurantById,
    updateRestaurant,
    createRestaurant,
    deleteRestaurant,
    searchRestaurants,
}; export default restaurantsService;