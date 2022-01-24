const mongoose = require('mongoose')
const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false;
    if (typeof value === 'string' && value.trim().length === 0) return false;
    return true;
};
const isValidRequestBody = function (requestbody) {
    return Object.keys(requestbody).length > 0;
};

const isValidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}
const isString = function (value) {
    if (typeof value === 'string' && value.trim().length === 0) return false//it checks the value conAtain only space or not 
    return true;
}
const isValidStatus = function(title) {
    return ['pending', 'completed', 'canceled'].indexOf(title) !== -1
}
const ValidSize= function(value)
{
    for (i = 0; i < value.length; i++) {
        let size = ["S", "XS", "M", "X", "L", "XXL", "XL"] 
        if (!(size.includes(value[i])))
        {   
            return false
        }

    }
    return true
}
module.exports={isValid,isValidRequestBody,isValidObjectId,isString,isValidStatus,ValidSize}