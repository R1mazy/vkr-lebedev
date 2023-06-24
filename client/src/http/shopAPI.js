import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const getShops = async () => {
    const data = await $host.get('api/apppars/download')
    console.log(data)
    return data.data;
}



export const getShops1 = async () => {
    const data = await $host.get('api/apppars1/download1')
    console.log(data)
    return data.data;
}
export const getShops2 = async () => {
    const data = await $host.get('api/apppars2/download2')
    console.log(data)
    return data.data;
}
export const getShops3 = async () => {
    const data = await $host.get('api/apppars3/download3')
    console.log(data)
    return data.data;
}
export const getShops4 = async () => {
    const data = await $host.get('api/apppars4/download4')
    console.log(data)
    return data.data;
}
export const getShops5 = async () => {
    const data = await $host.get('api/apppars5/download5')
    console.log(data)
    return data.data;
}
export const getShops6 = async () => {
    const data = await $host.get('api/apppars6/download6')
    console.log(data)
    return data.data;
}
export const getShops7 = async () => {
    const data = await $host.get('api/apppars7/download7')
    console.log(data)
    return data.data;
}
export const getShops8 = async () => {
    const data = await $host.get('api/apppars8/download8')
    console.log(data)
    return data.data;
}
export const getShops9 = async () => {
    const data = await $host.get('api/apppars9/download9')
    console.log(data)
    return data.data;
}
export const getShops10 = async () => {
    const data = await $host.get('api/apppars10/download10')
    console.log(data)
    return data.data;
}