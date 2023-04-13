import {AxiosRes, axiosService} from "./axios.service";
import {BookInterface} from "../interfaces/book.interface";
import {urls} from "../utils/constansts/urls";
import {authService} from "./auth.service";

export const bookService = {
    getAll:():AxiosRes<BookInterface[]> =>axiosService.get(urls.books, {headers:{Authorization:`Bearer ${authService.getAccessToken()}`}}),
    getById:(id: number):AxiosRes<BookInterface> =>axiosService.get(`${urls.books}/${id}`),
    postBook:(book: BookInterface):AxiosRes<BookInterface> => axiosService.post(urls.books, book),
    deleteById:(id: number):AxiosRes<BookInterface> => axiosService.delete(`${urls.books}/${id}`)
}