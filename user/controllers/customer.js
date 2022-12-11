const Customer=require('D:/Project-Nodejs/internal/models/customer')
let validationCustomer=require("D:/Project-Nodejs/user/validations/customer")
let response=require('D:/Project-Nodejs/internal/log/response')
let initID=require('D:/Project-Nodejs/internal/models/initID')
let hashPassword=require('D:/Project-Nodejs/internal/middleware/hashPassword')

module.exports.postCreate=async function(req,res,next){
    let customer=req.body;
    let err=validationCustomer.validationCustomer(customer);
    if(!err){
        response.Status.Status400.data=err;
        res.json(response.Status.Status400)
    }
    const id=initID.initID();
    const newCustomer=new Customer({
        _id:id,
        name:customer.name,
        email:customer.email,
        password:hashPassword.hashPassword(customer.password),
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

module.exports.detailCustomer=async function(req,res,next){
    const id=req.params.id;
    const customer=await Customer.findById(id).exec()
    if(customer!=null){
        res.json(customer)
    }else{
        res.json('null')
    }


}

module.exports.login=async function(req,res,next){
    const login=req.body
    var customer=await Customer.findOne({email:login.email,password:hashPassword.hashPassword(login.password)}).exec();
    res.json(customer.id)
}



