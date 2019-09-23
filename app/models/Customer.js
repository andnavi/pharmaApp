const mongoose = require('mongoose');
const validator = require('validator');
const shortid = require('shortid');
const faker = require('faker');


const CustomerSchema = mongoose.Schema({
    customerId:{
      type:String,
      default:shortid.generate()
    },
    firstName: {
        type: String,
        trim:true,
        required:true,
        default:faker.name.firstName()
      },
      lastName: {
        type: String,
        default:faker.name.lastName(),
        trim:true
      },
      address:{
        type:String,
        default:faker.address.secondaryAddress()
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
        },
        default:faker.internet.email()
      },
      mobileNumber: {
        type: Number,
        trim:true,
        unique:true,
        default:faker.random.number()
      },
      avatar:{
        type:Buffer,
        default:faker.image.avatar()
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