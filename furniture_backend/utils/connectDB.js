const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

async function comm (cb) {
    try {
        let db = await mongoose.connect(process.env.MONGODB_URL);
        if(db.STATES.connected == 1) {
        console.log('connection to db was successfull')
        cb();
        } else {

        }
    } catch (error) {
       console.log("connection to db wasn't successfull") 
    }
}

module.exports = comm;