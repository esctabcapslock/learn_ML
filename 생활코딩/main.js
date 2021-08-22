const fs = require('fs')
const http = require('http')
const port = 80
const server = http.createServer((req,res)=>{
    const url = req.url
    console.log(url,decodeURI(url))
    if(url=='/') {
        fs.readdir('./',(err,list)=>{
            //console.log(list)
            res.end(`<a href='https://zoom.us/j/92246873380?pwd=Z0RBQm9QSnE2K0lFMTBlcHFyUzBnUT09'>줌</a>`);
            return;
            out = list.map((i)=>`<div><a href="./${i}">${i}</a></div>`).join('')
            res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
            res.end(out)
        })
    }
    else {
        fs.readFile('./'+decodeURI(url),(err,data)=>{
            //console.log(err,data)
            if (err){
                res.statusCode=404
                res.end('404 not found')
            }
            if (decodeURI(url).endsWith('html')) res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'})
            res.end(data)
        })
    }
})

server.listen(port,()=>{console.log(`server is running at ${port}`)})