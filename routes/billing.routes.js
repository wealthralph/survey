const keys = require('../config/key')
const stripe = require('stripe')(keys.stripSecretKey)
const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
      await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description:'$5 for 5 credits',
            source: req.body.id
        })

        req.user.credits += 5
        const user =await req.user.save()
        res.send(user)
    })
}