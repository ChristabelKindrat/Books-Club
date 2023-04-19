import {AxiosRes, axiosService} from "./axios.service";
import {urls} from "../utils/constansts/urls";
import {TokenData, UserInterface, UserLoginInterface, UserToken} from "../interfaces";

const _accessTokenKey= 'access';
const _refreshTokenKey= 'refresh';

const authService = {

    login: (user: UserLoginInterface):AxiosRes<UserToken> => axiosService.post(`${urls.auth }/authenticate`, user),
    register: (user: UserInterface):AxiosRes<UserInterface> => axiosService.post(`${urls.auth}/register`, user),

    refresh:(refresh: string) =>axiosService.post(`${urls.auth}/refresh`, refresh),

    setTokens: ({access , refresh= ""}: TokenData) => {
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