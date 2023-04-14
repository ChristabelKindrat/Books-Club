import {AxiosRes, axiosService} from "./axios.service";
import {PhotoInterface, UserInterface} from "../interfaces";
import {urls} from "../utils/constansts/urls";

export const userService = {
    getById:(id:number):AxiosRes<UserInterface> =>axiosService.get(`${urls.users}/${id}`),
    post:(user: UserInterface):AxiosRes<UserInterface> => axiosService.post(urls.users,user ),
    patchById:(user: UserInterface, id: number):AxiosRes<UserInterface> => axiosService.patch(`${urls.users}/${id}`, user),
    patchPhotoById:(photo: PhotoInterface, id: number):AxiosRes<UserInterface> => axiosService.patch(`${urls.users}/${id}`, photo),
    deleteById:(id: number) => axiosService.delete(`${urls.users}/${id}`),
    isUserLogin: (): boolean => {
        const token =  localStorage.getItem('access')
        return !!token;
    },
}