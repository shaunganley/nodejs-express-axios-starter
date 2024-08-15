import express from "express";
import { createEmployee, getDeliveryEmployees, getEmployeeById } from "../services/EmployeeService"


export const getDeliveryEmployeesList = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render("deliveryEmployeeList.html", { employees: await getDeliveryEmployees() } )
}

export const getSingleEmployee = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('employeeDetail.html', {product: await getEmployeeById(req.params.id) });
}

export const getEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render("createEmployeeForm.html")
}

export const postEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const id = await createEmployee(req.body);
        res.redirect('/employees/');
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('createEmployeeForm.html', req.body);
    }
}
