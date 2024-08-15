import express from "express";
import { createSalesEmployee } from "../services/SalesEmployeeService";

export const getSalesEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('salesEmployeeForm.html');
}

export const postSalesEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> =>{
    try{
        const id = await createSalesEmployee(req.body,req.session.token);
        console.log
        res.redirect('/home.html');
    } catch (e){
        res.locals.errormessage = e.message;
        res.render('salesEmployeeForm.html', req.body);
    }
}
