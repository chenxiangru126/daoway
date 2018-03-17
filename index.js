/**
 * Created by Administrator on 2018/3/16.
 */
var express = require('express')
var app = express()
app.use(express.static('public'))

require('./tools/index')

const ShopModel = require('./modules/shop')
const ServiceModel = require('./modules/service')
const ItemsModel = require('./modules/items')
const CommentsModel = require('./modules/comments')

app.get('/shoplist',function (req,res) {

    ShopModel.find({},function (err,list) {
        if(err){
            console.log('cuo')
        }else
            console.log(list);
        res.send({list:list})
    })
})


app.get('/servicelist',function (req,res) {
    ServiceModel.find({},function (err,list) {
        if (err){
            console.log('cuo')
        }else
            console.log(list)
        res.send({list:list})
    })
})


app.get('/itemslist',function (req,res) {

    ItemsModel.find({}, function (err, list) {
        if (err) {
            console.log('cuo')
        } else
            console.log(list)
        res.send({list: list})
    })
})


app.get('/commentslist',function (req,res) {

    CommentsModel.find({},function (err,list) {
        if (err){
            console.log('cuo')
        }else
            console.log(list)
        res.send({list:list})
    })
})




app.listen(3000)