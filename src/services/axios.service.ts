import {baseURL} from "../utils/constansts/urls";

import axios, {AxiosResponse} from "axios";

export type AxiosRes<T>= Promise<AxiosResponse<T>>

const axiosService = axios.create({ baseURL });

export {
    axiosService
}