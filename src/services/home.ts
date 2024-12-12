import axios from "./Interceptor";

export const getHomeData = () => {
    return axios.get("/home/announcements");
}
export const getPublicData = () => {
    return axios.get("/home/public");
}