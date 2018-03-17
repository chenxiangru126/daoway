/**
 * Created by Administrator on 2018/3/16.
 */
var express = require('express')
var app = express()
app.use(express.static('public'))

require('../tools/index')

const ShopModel = require('../modules/shop')


app.get('/shoplist',function (req,res) {

    ShopModel.find({},function (err,list) {
        if(err){
            console.log('cuo')
        }else
        res.send({list:list})
    })
})

app.listen(3000)