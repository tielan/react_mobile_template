import axios from 'axios'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const service = axios.create({
    timeout: 8000 
})
service.interceptors.request.use(function (config) {
    let token = window.localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)
export default service
