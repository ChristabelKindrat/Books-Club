import {AxiosRes, axiosService} from "./axios.service";
import {BookInterface} from "../interfaces";
import {urls} from "../utils/constansts/urls";


export const bookService = {
    getAll:(pageNumber = 1):AxiosRes<BookInterface[]> =>axiosService.get(urls.books),
    getById:(id: number):AxiosRes<BookInterface> =>axiosService.get(`${urls.books}/${id}`),
    postBook:(book: BookInterface):AxiosRes<BookInterface> => axiosService.post(urls.books, book),
    patchBook:(image: string):AxiosRes<BookInterface> => axiosService.patch(urls.books, image),
    deleteById:(id: number):AxiosRes<BookInterface> => axiosService.delete(`${urls.books}/${id}`)
}