const Payment = require('../models/payment');
const check = require('../libs/checkLib');

let create = async (req,res) => {

    let billID = req.params.id;
    let billAmount = 500;

    let data =  await Payment.find({billID}).sort({ _id: -1 }).limit(1);

    let restAmount = data[0].restAmount  - req.body.paidAmount;

    console.log(restAmount);
    let newPayment = new Payment({
        ...req.body
        ,billID
        ,billAmount
        ,restAmount
    });

    try{
        await newPayment.save();
        res.send(newPayment);
    }catch(e){
        res.status('500').send(e);
    }
};


let getSingleBillPayment = async (req,res) => {

    let id = req.params.id;

    try{
        let bill = await Payment.find({billID:id});
        res.send(bill);
    }catch(e){
        res.send(e);
    }
   
};

module.exports = {
    create,
    getSingleBillPayment
};