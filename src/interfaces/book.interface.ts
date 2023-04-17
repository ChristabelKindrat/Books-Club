import {UserInterface} from "./user.interface";

interface PhotoInterface{
    photo_url?: string | null
}

interface BookPaginationInterface extends BookSearch{
    content: BookInterface[],
    page_number: number,
    page_size: number,
    total_element: number,
    total_pages: number
    prev: string,
    next: string
}
interface BookSearch{
    search_value?: string
}

interface BookInterface extends PhotoInterface{
    owner_id?: number | undefined;
    category_id?: number,
    id?: number,
    name: string,
    description: string,
    status: string,
    author_name: string,
    category: CategoryInterface,
    tags: TagsInterface[],
    user_name: string,
    owner: UserInterface,
}

interface TagsInterface{
    id: number,
    name?: string,
}

interface CategoryInterface {
    id: number,
    name: string
}

export type {
    BookInterface,
    BookPaginationInterface,
    TagsInterface,
    CategoryInterface,
};