import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


export const createFavr = async (body) => {
    const {data} = await $authHost.post('api/favourites', body)
    return data
}

export const getFavrs = async () => {
    const {data} = await $authHost.get('api/favourites')
    return data
}

export const removeFavrs = async (id) => {
    const {data} = await $authHost.delete(`api/favourites/${id}`)
    return data
}