const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        
    },
    desc:{
        type:String,
        required:true, 
    },
    img:{
        type:String,
        required:true,
        
    },
    categories:{
        type:Array,
        required:true,
    },
    size:{
        type: Array,
        
    },
    color:{
        type: Array,
        
    },
    price:{
        type: Number,
        required:true,
    },
    price:{
        type: Boolean,
        default:true,
    },
},
{ timestamps: true }
);

//Export the model
module.exports = mongoose.model('Product', ProductSchema);