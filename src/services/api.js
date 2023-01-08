import axios from "axios";

const api= axios.create({
    baseURL: "https://localhost:7055",
})

export default api;