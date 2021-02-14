import axios from "axios";

const API_URL = 'https://sds2poc.herokuapp.com';

export function fetchOrders(){
    console.log("aqui")
    return axios(`${API_URL}/orders`);
}

export function confirmDelivery(orderId: number){
    return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}