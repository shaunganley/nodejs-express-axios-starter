import express from "express";
import { createEmployee, createSalesEmployee, getDeliveryEmployees, getSalesEmployees } from "../services/EmployeeService"


export const getDeliveryEmployeesList = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render("deliveryEmployeeList.html", { employees: await getDeliveryEmployees() } )
}

export const getEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render("createEmployeeForm.html")
}

export const postEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        await createEmployee(req.body);
        res.redirect('/deliveryEmployeeList');
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('createEmployeeForm.html', req.body);
    }
}

export const getSalesEmployeesList = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render("salesEmployeeList.html", { employees: await getSalesEmployees() } )
}


export const getSalesEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render("createSalesEmployeeForm.html")
}

export const postSalesEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        await createSalesEmployee(req.body);
        res.redirect('/employees');
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('createSalesEmployeeForm.html', req.body);
    }
}
