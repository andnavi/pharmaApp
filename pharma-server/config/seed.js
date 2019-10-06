const faker = require('faker');
const shortid = require('shortid');
const fs = require('fs');

let USerModel = ({
    // userId: shortid.generate(),
    address:{
        street: faker.address.streetName(),
        place:faker.address.city(),
        pincode:faker.address.zipCode(),
    },
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    mobileNumber: faker.random.number()
});


let addUser = (USerModel) => {
    let users = loadUsers();
    users.push(USerModel);
    saveUsers(users);
};

let saveUsers = (users) => {
    let saveUser = JSON.stringify(users);
    fs.writeFileSync('user.json', saveUser);
};

let loadUsers = () => {
    try {
        let dataBuffer = fs.readFileSync('user.json');
        let dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }
};

addUser(USerModel);


