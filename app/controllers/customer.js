const Customer = require('../models/Customer');


let create = async (req,res) => {

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