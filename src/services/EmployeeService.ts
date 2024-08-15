import axios, {AxiosResponse} from "axios";
import { EmployeeResponse } from "../models/EmployeeResponse";
import { EmployeeRequest } from "../models/EmployeeRequest";

export const getDeliveryEmployees = async (): Promise<EmployeeResponse[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/employees/delivery")

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get delivery employees')
    }
}

export const createEmployee = async (employee: EmployeeRequest): Promise<Number> => {
    try {
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/employees/create", employee);

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error(e.response.data);
    }
}

export const getEmployeeById = async (id: String): Promise<EmployeeResponse> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/employees/" + id);

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get product');
    }
}

