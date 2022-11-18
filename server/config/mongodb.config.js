const mongoose = require('mongoose')
const {mongoDb} = require('./keys')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(mongoDb)
        console.log('Mongo connected', `${conn.connection.host}`)
    }catch(error){
        console.log(error);
        process.exit(1)
    }
}

module.exports =connectDB