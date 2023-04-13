import {AxiosRes, axiosService} from "./axios.service";
import {urls} from "../utils/constansts/urls";
import {UserInterface, UserLoginInterface} from "../interfaces";

const _accessTokenKey= 'access';
const _refreshTokenKey= 'refresh';

const authService = {

    login: (user: UserLoginInterface):AxiosRes<UserLoginInterface> => axiosService.post("http://localhost:8080/api/v1/auth/authenticate", user),
    register: (user: UserInterface):AxiosRes<UserInterface> => axiosService.post("http://localhost:8080/api/v1/auth/authenticate", user),

    setTokens: ({access , refresh}: any) => {
        localStorage.setItem(_accessTokenKey, access)
        localStorage.setItem(_refreshTokenKey, refresh)
    },
    deleteTokens: ()=>{
        localStorage.removeItem(_accessTokenKey)
        localStorage.removeItem(_refreshTokenKey)
    },
    getAccessToken: () => localStorage.getItem(_accessTokenKey),
    getRefreshToken: () => localStorage.getItem(_refreshTokenKey),
}

export {
    authService
};