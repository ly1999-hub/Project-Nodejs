const {body, validationResult } = require('express-validator');
 
module.exports.validationCustomer=(req)=>{
    body('name').isEmpty();
    body('email').isEmail();
    body('location').isEmpty();
    body('phone').isEmpty();
    var err=validationResult(req);
    return err
}