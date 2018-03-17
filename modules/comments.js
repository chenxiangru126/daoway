const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    iconUrl:{type:String},
    area:{type:String},
    city:{type:String},
    comment:{type:String},
    createtime:{type:Number},
    nick:{type:String},
    star:{type:Number},

},{
    collection:'comments'
})


module.exports = mongoose.model('comments',CommentSchema)