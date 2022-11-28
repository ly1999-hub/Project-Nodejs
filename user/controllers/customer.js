const Customer=require('D:/Project-Nodejs/internal/models/customer')
let validationCustomer=require("D:/Project-Nodejs/user/validations/customer")
let response=require('D:/Project-Nodejs/internal/log/response')
let initID=require('D:/Project-Nodejs/internal/models/initID')
module.exports.postCreate=async function(req,res,next){
    let customer=req.body;
    let err=validationCustomer.validationCustomer(req);
    if(!err){
        response.Status.Status400.data=err;
        res.json(response.Status.Status400)
    }

    const id=initID.initID();

    const newCustomer=new Customer({
        _id:id,
        name:customer.name,
        email:customer.email,
        phone:customer.phone,
        location:customer.location,
        createdAt:Date.now(),
        updatedAt:Date.now()

    })
    await Customer.create(newCustomer).catch((errors)=>{
        console.log("ERROR")
        console.log(errors)
    });

    res.json(id)
}