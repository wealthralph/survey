const http = require('http')
const connectDB = require('../config/mongodb.config')
require('dotenv').config()

const app = require('./app')
connectDB()
const PORT = process.env.PORT || 5000

const server = http.createServer(app)

server.listen(PORT, () => {console.log(`listening on port ${PORT}`)})