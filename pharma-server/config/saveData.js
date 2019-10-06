const mongoose = require('mongoose');
const User = require('../app/models/User');
const Customer = require('../app/models/Customer');
const appConfig = require('../config/appConfig');

var json = require('../user.json');

mongoose.connect(appConfig.db.uri,{ useNewUrlParser:true ,useCreateIndex:true},(err,res)=>{
    if(err){
        console.log(err);
    }else{
        console.log('mongodb connected successfully');
        insertUserData();
    }
});


function insertUserData(){
    Customer.insertMany(json, function(err,result) {
        if (err) {
          // handle error
          console.log(err);
        } else {
           console.log('data inserted succesfully');
          // handle success
        }
     });
}
