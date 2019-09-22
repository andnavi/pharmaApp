const Bill = require('../models/Bill');

let create = async (req,res) => {

    let newBill = new Bill({
        ...req.body
        ,customerId:"5d87c7aece292058502ba637"
    });

    try{
        await newBill.save();
        res.send(newBill);
    }catch(e){
        res.status('500').send(e);
    }
};

let getBillsByCustomer = async (req,res) => {

    let customerId = req.params.customerId;

    console.log(customerId);
    try{
        let bills = await Bill.find({customerId:customerId});
        res.send(bills);
    }catch(e){
        res.status('500').send(e);
    }

};

module.exports = {
    create,
    getBillsByCustomer
};