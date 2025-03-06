const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    blogName:{type:String,require:true},
    category:{type:String,require:true},
    content:{type:String,require:true},
    author:{type:String,require:true},
    status: {type:String,require:true}
},
{
    timestamps: true 
  
}

)

module.exports = mongoose.model('Users',userSchema)