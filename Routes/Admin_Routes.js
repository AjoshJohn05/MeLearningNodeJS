const express= require('express');
const path=require('path');

const rootPath=require('../Utils/Path_Utility');
const router=express.Router();

router.get('/addProduct',(req,res,next)=>{
     //console.log('/addProduct');
    // res.send('<form method="POST" action="/admin/product"><input type="text" name="productname" placeholder="Product Name" /><button type=submit >Add</button></form>');
    // res.sendFile(path.join(__dirname,'..','Views','AddProductView.html'));
    res.sendFile(path.join(rootPath,'Views','AddProduct_View.html'));
});

router.get('/addUser',(req,res,next)=>{
     //console.log('/addUser');
    // res.send('<form method="POST" action="/user"><input type="text" name="username" placeholder="Username" /><button type=submit >Add</button></form>');
    // res.sendFile(path.join(__dirname,'..','Views','AddUserView.html'));
    res.sendFile(path.join(rootPath,'Views','AddUser_View.html'));
});
router.post('/user',(req,res)=>{
     //console.log(req.body);
    res.redirect('?username='+req.body.username);

});
router.post('/product',(req,res)=>{
     //console.log(req.body);
    res.redirect('/productDetails?productname='+req.body.productname);
});


module.exports=router;