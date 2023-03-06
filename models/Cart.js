const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var CartSchema = new mongoose.Schema({
    userId: {
        type:String,
        required:true,
    },
    products : [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                default: 1,
            },
        },
    ],
        
},
{ timestamps: true }
);

//Export the model
module.exports = mongoose.model('Cart', CartSchema);