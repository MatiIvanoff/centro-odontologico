import axios from "axios";

const instance = axios.create({
    baseURL: "https://centro-medico-backend-wqza.onrender.com/api",
    withCredentials: true
})


instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer: ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default instance;