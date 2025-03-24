const mongoose = require("mongooose")

const cartSchema = new mongoose.Schema({
    username:{type:String, required:true},
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: 'User', required: true },
    productId: { type: mongoose.SchemaTypes.ObjectId, ref: 'Product', required: true },
    itemAdded:{type:Boolean, default:false},
    title:{type:String, required:true},
    details:{type:String, required:true},
    price:{type:String, required:true},
    image:{type:String, required:true},
    category:{type:String, required:true},
    amount:{type:Number,required:true},
    star:{type:String, required:true},
    starNumber:{type:String},
    colour:{type:String, required:true},
    company:{type:String, required:true},                                
},{timestamps:true})

const model = mongoose.model("Cart", cartSchema)
module.exports = model

