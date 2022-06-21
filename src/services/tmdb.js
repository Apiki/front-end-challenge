import axios from 'axios'
const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTc0NjlmY2EwMzExMTljZjEzMzkyNDk0ODZmMThkYyIsInN1YiI6IjYyNGI1NjNjZmFkOGU5MDA0ZjkxZmQ0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Lhu1h9yOUMe0bTPvz2hhJcIengJi_NPwix7PecTbZE'
    }
})

export default tmdb