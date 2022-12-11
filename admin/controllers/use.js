const Customer=require("D:/Project-Nodejs/internal/models/customer.js");
var response=require('D:/Project-Nodejs/internal/log/response')

// All Customer 
module.exports.All=async function(res,req,next){
    try {
        var AllCustomer= await Customer.find();
    } catch (error) {
        const err=response.Status.Status500.data=error;
        res.json(err)
    }
    res.json(AllCustomer)
}

// Detail Customer
module.exports.Detail=async function(req,res,next){
    const id=req.params.id;
    const customer=await Customer.findById(id).exec();
    if(customer!=null){
        res.json(customer)
    }else{
        res.json('null')
    }
}