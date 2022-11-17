const http = require('http')
const connectDB = require('../config/mongodb.config')
const dotenv =require('dotenv').config()


connectDB()
const app = require('./app')
const PORT = process.env.PORT || 5000

const server = http.createServer(app)

server.listen(PORT, () => {console.log(`listening on port ${PORT}`)})