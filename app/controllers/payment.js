const Payment = require('../models/payment');

let create = async (req,res) => {

    let billID = req.params.id;
    let billAmount = 500;

    let data =  await Payment.find({billID}).sort({ _id: -1 }).limit(1);

    let restAmount = data[0].restAmount - req.body.paidAmount;

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


module.exports = {
    create
};