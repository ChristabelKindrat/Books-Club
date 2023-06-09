import {AxiosRes, axiosService} from "./axios.service";

import {AddressInterface, BookInterface, UserBooks, UserInfoLoginInterface, UserInterface} from "../interfaces";
import {urls} from "../utils/constansts/urls";

export const userService = {

    getUser:():AxiosRes<UserInterface> =>axiosService.get(urls.users ),
    getById:(id:number):AxiosRes<UserInterface> =>axiosService.get(`${urls.users}/${id}`),
    getUserWantBooks:(id: number):AxiosRes<BookInterface[]> => axiosService.get(`${urls.users}/${id}/books`),
    getUserBooks:(id: number):AxiosRes<UserBooks[]> => axiosService.get(`${urls.users}/${id}/personal-books`),

    putAddress:(address:AddressInterface, id: number)=>axiosService.put(`${urls.users}/${id}/address`, address),
    putInfo:(info:UserInfoLoginInterface, id: number)=>axiosService.put(`${urls.users}/${id}`, info),

    patchPhotoById:(formData: FormData, id: number):AxiosRes<UserInterface> => axiosService.patch(`${urls.users}/${id}`,
        formData, { headers: { "Content-Type": "multipart/form-data" } }),

    deleteById:(id: number) => axiosService.delete(`${urls.users}/${id}`),

    isUserLogin: (): boolean => {
        const token =  localStorage.getItem('access')
        return !!token;
    },
}