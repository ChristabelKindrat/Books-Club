const baseURL =process.env["REACT_APP_API "];

const urls = {
    auth: '/auth',
    users: '/users',
    books: '/books',
    register: '/register',
    category:'/category',
    tags: './tags'
}

export { baseURL, urls }