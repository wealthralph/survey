const mongoose = require('mongoose')
const {mongoDb} = require('./key')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(mongoDb)
        console.log('Mongo connected', `${conn.connection.host}`)
    }catch(error){
        console.error(error);
        process.exit(1)
    }
}

module.exports =connectDB