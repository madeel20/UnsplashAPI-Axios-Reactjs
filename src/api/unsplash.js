import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f9e4dce949b6bbace730346f782917f07d9cafd02ae423f3b8c36937d800b3ad'
    }
})