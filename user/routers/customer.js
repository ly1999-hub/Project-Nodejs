const express=require('express')
const router=express.Router();
const controllerCustomer=require('../controllers/customer')
const controllerAttire=require('D:/Project-Nodejs/product/controllers/attire')

router.get('/:id',controllerCustomer.detailCustomer);
router.post('/create',controllerCustomer.postCreate);
router.post('/:id/attire/create',controllerAttire.CreateAttire)
router.delete('/:id/attire/delete/:idProject',controllerAttire.DeleteAttire)
router.post('/login',controllerCustomer.login)

module.exports = router