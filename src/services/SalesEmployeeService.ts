import axios, { AxiosResponse } from "axios";
import { getHeader } from "./AuthUtil";
import { SalesEmployeeRequest } from "../models/SalesEmployeeRequest";



export const createSalesEmployee = async( salesEmployee: SalesEmployeeRequest, token: String): Promise<Number> => {
    try{
        const response: AxiosResponse = await axios.post("http://localhost:8080/api/sales", salesEmployee, getHeader(token));
        
        return response.data;
    } catch (e){
        console.log(e);
        throw new Error(e.response.data);
    }

}