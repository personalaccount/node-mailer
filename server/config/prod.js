// Get values from Heroku's env. variables
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    // stripeSecretKey: 'sk_test_Oo9dBQqpX1h0NJtXDTN3yxol00VPVDM3a7'

}