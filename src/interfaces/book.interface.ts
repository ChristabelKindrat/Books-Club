interface BookInterface{
    id: number,
    name: string,
    description: string,
    photo_url: string | null,
    status: string,
    author_name: string,
    category_name: string,
    tags: {id:number}[],
    user_name: string
}

export type {
    BookInterface
};