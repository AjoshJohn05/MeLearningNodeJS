
const express=require('express');
const bodyParser=require('body-parser');

const app= express();
app.use(bodyParser.urlencoded({extended:false}));
app.get('/favicon.ico', (req, res) => {
    // Respond with an appropriate status code and message
    res.status(204).end();
});
app.get('/addUser',(req,res,next)=>{
    console.log('/addUser');
    res.send('<form method="POST" action="/user"><input type="text" name="username" placeholder="Username" /><button type=submit >Add</button></form>');
});
app.post('/user',(req,res)=>{
    console.log(req.body);
    res.redirect('?username='+req.body.username);

});
app.use('/',(req,res)=>
{
    console.log(req.query);
    let passedUsername="";
    if(req.query.username!==undefined)
    {
        passedUsername=req.query.username;
    }
    console.log('/ route middleware');
    res.send('<h1>Hello...Welcome '+passedUsername+'</h1>');
});
app.listen(3008);
//server.close();

