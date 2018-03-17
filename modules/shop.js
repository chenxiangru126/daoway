/**
 * Created by Administrator on 2018/3/16.
 */
const mongoose = require('mongoose')

const ShopSchema = new mongoose.Schema({
    serviceIndex:{type:String,unique:true},
    serviceType:{type:Array,unique:true},
    shopList:{type:Array,unique:true}


},{
    collection:'shops'
})

module.exports = mongoose.model('shop',ShopSchema)