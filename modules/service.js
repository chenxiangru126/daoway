const mongoose = require('mongoose')

const ServiceSchema = new mongoose.Schema({
    title:{type:String},
    orderCount:{type:Number},
    positiveRate:{type:String},
    imgUrl:{type:String}

},{
    collection:'service'
})

module.exports = mongoose.model('service',ServiceSchema)