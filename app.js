
const express=require('express');

const expressApp= express();
expressApp.use((request,response,next)=>
{
    console.log("Middleware-1");
    next();
});
expressApp.use('/add',(req,resp,next)=>
{
    console.log("URL:/add");
    next();
});
expressApp.use('/',(req,resp,next)=>
{
    console.log("url:/");
    next();
});

expressApp.use((request,response)=>
{
    console.log("Middleware-2");
    response.send('<h1>Hi hello...!</h1>');
});

expressApp.listen(3008);
//server.close();

