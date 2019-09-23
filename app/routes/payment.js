const payment = require("./../../app/controllers/payment");
const appConfig = require("./../../config/appConfig");
const auth = require("../middlewares/auth");


module.exports.setRouter = (app) => { 

    let baseUrl = `${appConfig.apiVersion}/payment`;

    app.post(`${baseUrl}/create/:id`,payment.create);

    
};
