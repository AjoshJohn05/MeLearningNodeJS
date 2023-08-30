const express= require('express');
const router=express.Router();

router.get('/favicon.ico', (req, res) => {
    // Respond with an appropriate status code and message
    res.status(204).end();
});

router.get('/productDetails',(req,res)=>
{
     //console.log(req.query);
    let passedProductName="";
    if(req.query.productname!==undefined && req.query.productname!=="" && req.query.productname.trim()!=='')
    {
        passedProductName=req.query.productname;
        res.send('<h1>You have success fully added the product: '+passedProductName+'</h1><form method="GET" action="/"><button type=submit >OK </button></form>');
    }
    else
    {
        res.redirect('/');
    }
    //  //console.log('/ route middleware'); 
});
router.post('/user',(req,res)=>{
    //  .log(req.body);
    res.redirect('?username='+req.body.username);
});
router.get('/user',(req,res)=>
{
     //console.log(req.query);
    let passedUsername="";
    let HtmlCode=""
    if(req.query.username!==undefined && req.query.username!=="" && req.query.username.trim()!=='' )
    {
         //console.log("Hai");

        passedUsername=req.query.username;
        HtmlCode='<h1>Hello...Welcome '+passedUsername+'</h1><form method="GET" action="admin/addProduct"><button type=submit >Add Product</button></form>';
        res.send(HtmlCode);
    }
    else
    {
         //console.log("Hello");
        res.redirect('/');
        // HtmlCode ='<h1>Hello...Welcome '+passedUsername+'</h1><form method="GET" action="/addProduct"><button type=submit >Add Product</button></form><form method="GET" action="/addUser"><button type=submit >Signup</button></form> ';
        //HtmlCode.concat('<form method="GET" action="/addUser"><button type=submit >Signup</button></form> ');
    }
     //console.log('/ route middleware');
     //console.log("Html: "+HtmlCode);
     //console.log(req.query.username);
    
});
router.get('/',(req,res)=>
{
     //console.log(req.query);
    let passedUsername="";
    let HtmlCode=""
    // if(req.query.username!==undefined && req.query.username!=="" && req.query.username.trim()!=='' )
    // {
    //      //console.log("Hai");

    //     passedUsername=req.query.username;
    //     HtmlCode='<h1>Hello...Welcome '+passedUsername+'</h1><form method="GET" action="/addProduct"><button type=submit >Add Product</button></form>';
    // }
    // else
    // {
         //console.log("Hello");
        HtmlCode ='<h1>Hello...Welcome '+passedUsername+'</h1><form method="GET" action="admin/addProduct"><button type=submit >Add Product</button></form><form method="GET" action="admin/addUser"><button type=submit >Signup</button></form> ';
        //HtmlCode.concat('<form method="GET" action="/addUser"><button type=submit >Signup</button></form> ');
    // }
      //console.log('/ route middleware');
     //console.log("Html: "+HtmlCode);
     //console.log(req.query.username);
    res.send(HtmlCode);
});
module.exports=router;