const Attire = require("D:/Project-Nodejs/internal/models/attire");
const Response=require("D:/Project-Nodejs/internal/log/response")
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