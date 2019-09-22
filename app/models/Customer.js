const mongoose = require('mongoose');
const validator = require('validator');
const shortid = require('shortid');

const CustomerSchema = mongoose.Schema({
    customerId:{
      type:String,
      default:shortid.generate()
    },
    firstName: {
        type: String,
        trim:true,
        required:true
      },
      lastName: {
        type: String,
        default: '',
        trim:true
      },
      address:{
        type:String
      },
      email: {
        type: String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        validate(value){
          if(!validator.isEmail(value)){
            throw new Error('Pass Valid email id');
          }
        }
      },
      mobileNumber: {
        type: Number,
        trim:true,
        unique:true
      },
      avatar:{
        type:Buffer
      },
      billIds:[{
          billId:{
              type:String
          }
      }]
},
{
    timestamps:true
});


module.exports = mongoose.model('Customer',CustomerSchema); 