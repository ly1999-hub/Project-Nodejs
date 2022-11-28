const { default: mongoose} = require('mongoose');

module.exports.initID=function(){
    id =new mongoose.Types.ObjectId();
    return id;
}