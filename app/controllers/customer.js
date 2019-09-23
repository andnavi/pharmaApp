const Customer = require('../models/Customer');


let create = async (req,res) => {

    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    console.log('ipAddress',ip);
    let newCustomer = Customer(req.body);

    try{
        await newCustomer.save();
        res.send(newCustomer);
    }catch(e){
        res.status('500').send(e);
    }
};

module.exports = {
    create:create
};