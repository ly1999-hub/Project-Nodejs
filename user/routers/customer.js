const express=require('express')
const router=express.Router();
const controllerCustomer=require('../controllers/customer')

router.post('/customer/create',controllerCustomer.postCreate);

module.exports = router