//this file is the root of application

const http= require('http');
const RouteSettings = require('./routes');
// const server= http.createServer((request,response)=>{
//     // console.log("Listening");
//     // console.log(request);
//     // console.log(response);
//     // console.log(request.url,request.method,request.headers);
//     console.log(request.url);
    
    
    
//     // process.exit();
// });
const server= http.createServer(RouteSettings);
// const server= http.createServer(RouteSettings.RouteConfig);
//console.log(RouteSettings.Discription);
server.listen(3005); //port:3005

