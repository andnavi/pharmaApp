const bill = require("./../../app/controllers/bill");
const appConfig = require("./../../config/appConfig");
const auth = require("../middlewares/auth");


module.exports.setRouter = (app) => { 

    let baseUrl = `${appConfig.apiVersion}/bill`;

    app.post(`${baseUrl}/create`,bill.create);

    app.get(`${baseUrl}/:customerId`,bill.getBillsByCustomer);
    
};
