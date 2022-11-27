const mongoose = require('mongoose')

module.exports.initMongoDB = async function initDB() {
    await mongoose.connect('mongodb://localhost:27017/store')
        .then(() => {
            console.log('Database connection successful')
        })
        .catch((error) => {
            console.log(error)
        })
}