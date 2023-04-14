import {createBrowserHistory} from 'history';
import {baseURL} from "../utils/constansts/urls";

import axios, {AxiosResponse} from "axios";
import {authService} from "./auth.service";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export type AxiosRes<T> = Promise<AxiosResponse<T>>
const history = createBrowserHistory();

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    const access = authService.getAccessToken();

    if (access) {
        config.headers.Authorization = `Bearer ${access}`
    }
    return config;
})

let isRefreshing = false
axiosService.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const refresh = authService.getRefreshToken();

    if(error.response?.status === 401 && error.config && !isRefreshing && refresh){
        isRefreshing = true

        try {
           const {data} = await authService.refresh(refresh);
           authService.setTokens(data)
        }catch (e) {
            authService.deleteTokens();
            return history.replace('/login?ExpSession=true')
        }
        isRefreshing = false
        return axiosService(error.config)
    }
    return Promise.reject(error)
})


export {
    axiosService,
    history
}

//connect history to Browser router