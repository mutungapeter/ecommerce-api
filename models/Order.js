const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var OrderSchema = new mongoose.Schema({
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

    amount: {
        type: Number, required: true
    },
    address: {
        type: Object, required: true
    },
    status: {
        type: String, default: "pending"
    },
        
},
{ timestamps: true }
);

//Export the model
module.exports = mongoose.model('Order', OrderSchema);