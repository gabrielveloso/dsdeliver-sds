import axios from "axios";


const API_URL = "https://gabriel-sdsdeliver.herokuapp.com";

export function fetchProducts() {
    return axios(`${API_URL}/products`)
}