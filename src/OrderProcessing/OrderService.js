import axios from 'axios';

const Order_API_BASE_URL = "http://localhost:9898/api/orders";

//const EMPLOYEE_API_BASE_URL = "./data/employees.json";

class OrderService {

    getOrders(){
        return axios.get(Order_API_BASE_URL);
    }

    createOrder(order){
        return axios.post(Order_API_BASE_URL, order);
    }

    getOrderById(orderId){
        return axios.get(Order_API_BASE_URL + '/' + orderId);
    }

    updateOrder(order, orderId){
        return axios.put(Order_API_BASE_URL + '/' + orderId, order);
    }

    deleteOrder(orderId){
        return axios.delete(Order_API_BASE_URL + '/' + orderId);
    }
}

export default new OrderService();