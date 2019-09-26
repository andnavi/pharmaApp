const Payment = require('../models/payment');
const Bill = require('../models/Bill');
const check = require('../libs/checkLib');

let create = async (req,res) => {

    let billID = req.params.id;
   
    let result = await Bill.findById(billID);

    let billAmount = result.totalAmount;

    let data =  await Payment.find({billID}).sort({ _id: -1 }).limit(1);

    if(data.length > 0){
        var restAmount = data[0].restAmount  - req.body.paidAmount;
        if(data[0].restAmount === 0){
            var message = 'No more payments to this Bill as the restAmount is already zero';
            res.send(message);
            return;
        }
    }else{
        var restAmount = billAmount - req.body.paidAmount;
    }

    if(restAmount < 0){
        Math.abs(restAmount);
        var message = `adjust ${restAmount} in next bill`;
        var restAmount = 0;
        let newPayment = new Payment({
            ...req.body
            ,billID
            ,billAmount
            ,restAmount
        });

        try{
            await newPayment.save();
            res.send({newPayment,message});
        }catch(e){
            res.status('500').send(e);
        }
    }else{
        let newPayment = new Payment({
            ...req.body
            ,billID
            ,billAmount
            ,restAmount
        });

        try{
            await newPayment.save();
            res.send({newPayment,message});
        }catch(e){
            res.status('500').send(e);
        }
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