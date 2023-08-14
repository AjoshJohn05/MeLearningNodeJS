
const express=require('express');
const bodyParser=require('body-parser');

const adminRouter=require('./Routes/Admin_Routes');
const userRouter=require('./Routes/User_Routes');

const app= express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/admin',adminRouter);
app.use(userRouter);
app.use((req,resp)=>{
    resp.status(404).send('<h1>404 Bad request</h1>');
});

// app.get('/favicon.ico', (req, res) => {
//     // Respond with an appropriate status code and message
//     res.status(204).end();
// });
// app.get('/addUser',(req,res,next)=>{
//     console.log('/addUser');
//     res.send('<form method="POST" action="/user"><input type="text" name="username" placeholder="Username" /><button type=submit >Add</button></form>');
// });
// app.get('/addProduct',(req,res,next)=>{
//     console.log('/addProduct');
//     res.send('<form method="POST" action="/product"><input type="text" name="productname" placeholder="Product Name" /><button type=submit >Add</button></form>');
// });
// app.post('/user',(req,res)=>{
//     console.log('/user');
//     console.log(req.body);
//     res.redirect('?username='+req.body.username);

// });
// app.post('/product',(req,res)=>{
//     console.log(req.body);
//     res.redirect('/productDetails?productname='+req.body.productname);
// });
// app.use('/productDetails',(req,res)=>
// {
//     console.log(req.query);
//     let passedProductName="";
//     if(req.query.productname!==undefined && req.query.productname!=="" && !req.query.productname.trim()==='')
//     {
//         passedProductName=req.query.productname;
//         res.send('<h1>You have success fully added the product: '+passedProductName+'</h1>');
//     }
//     else
//     {
//         res.redirect('/');
//     }
//     console.log('/ route middleware');
    
// });

// app.use('/',(req,res)=>
// {
//     console.log(req.query);
//     let passedUsername="";
//     if(req.query.username!==undefined)
//     {
//         passedUsername=req.query.username;
//     }
//     console.log('/ route middleware');
//     res.send('<h1>Hello...Welcome '+passedUsername+'</h1>');
// });
app.listen(3008);
//server.close();

