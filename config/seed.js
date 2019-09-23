const User = require('../app/models/User');
const faker = require('faker');
const shortid = require('shortid');
const response = require('../app/libs/responseLib');

let USerModel = ({
    userId:shortid.generate(),
    firstName:faker.name.firstName(),
    lastName:faker.name.lastName(),
    password:faker.internet.password(),
    email:faker.internet.email(),
    mobileNumber:faker.random.number()
});

module.exports = {
    USerModel
};

