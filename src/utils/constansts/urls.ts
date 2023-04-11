const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000'

const urls = {
    auth: '/auth',
    admin: '/admin',
    books: '/books',
    user: '/user'
}

export { baseURL, urls }