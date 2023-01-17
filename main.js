const http = require('http');

const server = http.createServer((req,res)=> {
    if(req.url === '/'){
        res.write("Hello World");
        //res.write("\nI need to take a shit like really bad");
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.write("This is a list of offerings");
        res.end();
    }
})

server.listen(3000);
console.log("Listening to port 3000 ....");