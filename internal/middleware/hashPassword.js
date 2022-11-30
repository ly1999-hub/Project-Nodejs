var md5 =require('md5');

module.exports.hashPassword=function(password){
    return md5(password)
}

module.exports.checkPassword=function(password){
    return 
}