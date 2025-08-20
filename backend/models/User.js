const mongoose = require('mongoose')
const validator  = require('validator')

const schema = mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:[true,"Enter your Email address"],
        unique:true,
        validate:[validator.isEmail, "Please enter a valid Email"]
    },
    phoneNumber:{
        type:String,
        required:[true,"Enter your phone number"],
        unique:true,
        minlength:[10,"Phone number must be exactly 10 digits"],
        maxlength:[10,"Phone number must be exactly 10 digits"]
    },
    password:{
        type:String,
        required:true,
        minlength:[6,"Minimum length of password is 6"]
    },
    role:{
        type:String,
        enum:["free","basic","premium"],
        default:"free",
    },
    subscription:{
        id:String,
        status:String,
    }
},{timestamps: true})

module.exports = mongoose.model("User",schema)
