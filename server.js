const http = require('http');
const fs=require('fs');
// const {randomColorPalatte} = require('file-reader')

http.createServer((req,res,err) => {
    if(err)
    console.log(err)
    if(req.url != 'favicon.ico') 
    {
        fs.readFile('color_ palette.json',(err,data) => {
            if (err){
                console.log(err);
                return
            }
            let randomizedColorPallete =[]
            let colorObj = JSON.parse(data);
            for(let i = 0; i<5;i++){
                randomizedColorPallete.push(colorObj[Math.ceil(Math.random() * colorObj.length)])
            }
            res.write(JSON.stringify(randomizedColorPallete))
            res.end();
         
        })
    }
}).listen(4000)

