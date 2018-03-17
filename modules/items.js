const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    title:{type:String},
    name:{type:String},
    desc:{type:String},
    price:{type:Number},
    oldPrice:{type:Number},
    orderCount:{type:Number},
    soldCount:{type:Number},
    commentCount:{type:Number},
    accept:{type:String},
    praise:{type:String},
    imgUrl:{type:String},
    company:{type:String},
    profile:{type:String}

},{
    collection:'items'
})

module.exports = mongoose.model('items',ItemSchema)