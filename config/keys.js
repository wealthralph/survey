const dotenv =require('dotenv').config()

module.exports = {
    googleClientID: '155455928697-f8hehk87ck23ulbjaiosu9rqnb35ui02.apps.googleusercontent.com',
    googleClientSecret: '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',
    mongoDb: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE
    
}