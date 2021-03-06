const Product = require('../models/product');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
// add new product
// route api/v1/admin/product/new
// access admin
 exports.newProduct = catchAsyncErrors(async (req, res, next)=>{

    const product = await Product.create(req.body);

     return res.status(201).json({
        success: true,
        product
     });
});

// get all products
// route api/v1/products
// access user
exports.getProducts = catchAsyncErrors(async (req,res,next)=>{
     const products = await Product.find();
    return res.status(200).json({
         success:true,
         count: products.length,
         products
     });
})
// get single product
// route api/admin/v1/product/id
// access admin
exports.getProduct =catchAsyncErrors( async (req,res,next)=>{
     console.log(req)
    const product = await Product.findById(req.params.id);
    if(!product){
        return  next(new ErrorHandler('Product not found',404));
    }
    return   res.status(200).json({
        success:true,
        product
    });

})
// update single product
// route api/admin/v1/product/id
// access admin
exports.updateProduct = catchAsyncErrors(async (req,res,next)=>{
     console.log(req.body)
    const product = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new : true,
        runValidators: true,
        useFindAndModify: true
    });
    if(!product){
        return  next(new ErrorHandler('Product not found',404));
    }
    return  res.status(200).json({
        success:true,

    });

})
// delete single product
// route api/admin/v1/product/id
// access admin

exports.deleterProduct = catchAsyncErrors(async (req,res,next)=>{
    console.log(req.body)
    const product = await Product.findById(req.params.id);
    if(!product){
        return  next(new ErrorHandler('Product not found',404));
    }
    await product.remove();
    res.status(200).json({
        success:true,
        message:'Product deleted'

    });

})



