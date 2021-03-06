const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = mongoose.Schema(
    {
        name: {
          type: String,
          trim:true,
          required:true,
          maxlength:32
        },
        description:{
            type:String,
            trim:true,
            required:true,
            maxlength:2000
        },
        price:{
            type:Number,
            require:true,
            maxlength:2000
        },
        category:{
            type:ObjectId,
            ref:"Category",
            require: true
        },
        stock:{
            type:Number
        },
        sold:{
            type:Number,
            default:0
        },
        photo:{
            date:Buffer,
            contentType: string
        }

    },
    { timestamps: true }
);




module.exports = mongoose.model("product",productSchema)