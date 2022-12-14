const Attire = require("D:/Project-Nodejs/internal/models/attire")
const Response=require("D:/Project-Nodejs/internal/log/response")
let initID=require('D:/Project-Nodejs/internal/models/initID')
const { isValidObjectId } = require('mongoose');

module.exports.getAllAttire = async function(req, res, next) {
    try {
        var attires = await Attire.find()
    } catch (error) {
        console.log(error)
    }
    res.json(attires)
}

module.exports.getDetailAttire=async function(req,res,next){
    const id = req.params.id;
    if (isValidObjectId(id)) {
        const UserDetail = await Attire.findById(id)
        res.json(UserDetail)
    }else{
        res.json(Response.Status.Status400)
    }
}

module.exports.CreateAttire=async function(req,res,next){
    const idCustomer=req.params.id;
    const attire=req.body;
     id=initID.initID();
    const newAttire=new Attire({
        _id:id,
        customer:idCustomer,
        trademark:attire.trademark,
        img:attire.img,
        name: attire.name,
        price: attire.price,
        size: attire.size,
        description: attire.description,
        sale: attire.sale,
        total: attire.total,
        createdAt:Date.now(),
        updatedAt:Date.now()

    })


    await Attire.create(newAttire).catch((errors)=>{
            console.log("ERROR")
            console.log(errors)
        });
    
    res.json(id)
}

module.exports.DeleteAttire=async function(req,res,next){
    const id =req.params.idProject;
    await Attire.findByIdAndRemove(id)
    .catch((error) => {
        res.json(error)
    })

    res.json(Response.Status.Status200)
}
module.exports.searchAttire=async function(req,res,next){
    var nameSearch=req.query.name;
    try {
        var Attires=await Attire.find();
        var listAttires=Attires.filter(function(attire){
            return attire.name.toLowerCase().indexOf(nameSearch.toLowerCase()) !== -1;
        })
    
        res.json(listAttires)
    } catch (error) {
        res.json(Response.Status.Status400)
    }
    
}