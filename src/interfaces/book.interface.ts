interface PhotoInterface{
    photo_url?: string | null
}

interface BookInterface extends PhotoInterface{
    id: number,
    name: string,
    description: string,
    status: string,
    author_name: string,
    category_name: string,
    tags: {id:number}[],
    user_name: string
}


export type {
    BookInterface
};