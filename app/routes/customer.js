const customer = require("./../../app/controllers/customer");
const appConfig = require("../../config/appConfig");
const auth = require("../middlewares/auth");


module.exports.setRouter = (app) => { 

    let baseUrl = `${appConfig.apiVersion}/customers`;

    app.post(`${baseUrl}/create`,customer.create);
    
};
