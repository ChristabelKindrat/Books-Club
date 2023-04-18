import {AxiosRes, axiosService} from "./axios.service";
import {BookInterface, BookPaginationInterface, CategoryInterface, TagsInterface, UserBooks} from "../interfaces";
import {urls} from "../utils/constansts/urls";

export const bookService = {
    getAll:(pageNumber = 0,term?:string):AxiosRes<BookPaginationInterface> =>axiosService.get(`${urls.books}`, {params:{pageNumber}}),
    getById:(id: number):AxiosRes<BookInterface> =>axiosService.get(`${urls.books}/${id}`),

    postBook:(book: BookInterface):AxiosRes<BookInterface> => axiosService.post(urls.books, book),
    patchBook:(id:number, image: unknown):AxiosRes<BookInterface> => axiosService.patch(`${urls.books}/${id}`, image),
    deleteById:(id: number):AxiosRes<BookInterface> => axiosService.delete(`${urls.books}/${id}`),

    postUserToBook: (book_id: number | undefined, user_id: number | undefined) => axiosService.post(`${urls.books}/${book_id}/users/${user_id}`),
    approveBook:(book_id: number ,user_id: number): AxiosRes<UserBooks[]>=>axiosService.post(`${urls.books}/${book_id}/users/${user_id}/approve`),

    getCategories:():AxiosRes<CategoryInterface[]> => axiosService.get(urls.category),
    getTags:():AxiosRes<TagsInterface[]> => axiosService.get(urls.tags),
}