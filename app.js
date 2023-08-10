//this file is the root of application

const http= require('http');
const fs=require("fs");
const { constrainedMemory } = require('process');
const { text } = require('stream/consumers');
const server= http.createServer((request,response)=>{
    // console.log("Listening");
    // console.log(request);
    // console.log(response);
    // console.log(request.url,request.method,request.headers);
    console.log(request.url);
    if(request.url==='/')
    {
        response.setHeader('Content-Type','text/html');
        response.write('<html>');
        response.write('<head><title>NodeServer</title></head>')
        response.write('<body>');
        response.write('<h1>Hi...Welcome...</h1>')
        response.write('<form method="POST" action="/message"><input type=text name=message  placeholder=Message /> <button type=submit>Send</button></form>')
       
        response.write('</body>');
        response.write('</html>');
        return    response.end();
    }
    
    if(request.url==="/message" && request.method==='POST')
    {
        const postBody= [];
        request.on('data',(chunk)=>{
            postBody.push(chunk);
        });
        console.log(postBody);
        //const parsedBody=[];
        const getParsedBody = () => {
            const promise = new Promise((resolve, reject) => {
                request.on('end',()=>{
                    resolve((Buffer.concat(postBody).toString()).split('=')[1]);
                });
            });
            return promise;
          };
          getParsedBody().then(parsedBody=>{
            response.write('<html>');
            response.write('<head><title>NodeServer</title></head>')
            response.write('<body>');
            response.write('<form action = "/received" method="POST">');
            response.write('<h1> Message received : '+ parsedBody +'</h1>');
            response.write('<button type ="submit">OK</button>')
            response.write('</form>')
            response.write('</body>');
            response.write('</html>');
            return parsedBody;
          }).then(parsedBody=>{
            fs.writeFile('serverFile.txt',parsedBody,()=>{
                return response.end();
            });
          });
        
    }
    if(request.url==="/received" && request.method==='POST')
    {
        
        response.statusCode=302;
        response.setHeader('Location','/');
        return response.end();
        
    }
    // process.exit();
});
server.listen(3005); //port:3005

