import express from "express";
import { createDeliveryEmployee } from "../services/DeliveryEmployeeService"


export const getDeliveryEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('deliveryEmployeeForm.html');
}

export const postDeliveryEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        console.log(req.body)
        const id = await createDeliveryEmployee(req.body);
        res.redirect('/deliveryEmployees/' + id);
    } catch(e) {
        res.locals.errormessage = e.message;
        res.render('deliveryEmployeeForm.html', req.body);
    }
}