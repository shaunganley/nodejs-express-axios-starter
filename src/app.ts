import express from "express";
import nunjucks from "nunjucks";

import { getDeliveryEmployeeForm, postDeliveryEmployeeForm } from "./controllers/DeliveryEmployeeController";

import bodyParser from "body-parser";

const app = express();

const env = nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/deliveryEmployeeForm', getDeliveryEmployeeForm);
app.post('/deliveryEmployeeForm', postDeliveryEmployeeForm);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});