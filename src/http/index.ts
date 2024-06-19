import axios from "axios"

export const API_URL = "http://localhost:3000"

const $api = axios.create({
    withCredentials: false,
    baseURL: API_URL,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
    }
})

export default $api