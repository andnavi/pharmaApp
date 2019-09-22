const mongoose = require('mongoose');
const shortid = require('shortid');


const billSchema = mongoose.Schema({
    billId: {
        type: String,
        require: true,
        default: shortid.generate()
    },
    totalAmount: {
        type: Number,
        require:true
    },
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Customer'
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('Bill', billSchema);