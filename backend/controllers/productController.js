const Product = require('../models/product');

 exports.newProduct = async (req, res, next)=>{

    const product = await Product.create(req.body);

     res.status(201).json({
        success: true,
        product
     })
}


exports.getProducts = (req,res,next)=>{
     console.log(req);
     res.status(200).json({
         success:true,
         message:'Fine'
     })
}