import {$authHost} from "./index";

export const addCourseToHistory = async (body) => {
    const {data} = await $authHost.post('api/history', body)
    return data
}


export const getCourseHistory = async () => {
    const {data} = await $authHost.get('api/history')
    return data
}
