import axios, { AxiosResponse } from "axios";
import { DeliveryEmployee } from "../models/DeliveryEmployee"
import { DeliveryEmployeeRequest } from "../models/DeliveryEmployeeRequest"


export const createDeliveryEmployee = async (deliveryEmployee: DeliveryEmployeeRequest): Promise<Number> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/deliveryEmployees", deliveryEmployee);

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error(e.response.data);
    }
}