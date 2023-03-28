const fs=require("fs");

fs.readFile('color_ palette.json',(err,data) => {
    if (err){
        console.log(err);
        return
    }
    let randomizedColorPallete =[]
    for(let i = 0; i<5;i++){
        let colorObj = JSON.parse(data);
        randomizedColorPallete.push(colorObj[Math.ceil(Math.random() * colorObj.length)])
    }
    fs.writeFile('new_color_ palette.json',JSON.stringify(randomizedColorPallete),(err,data)=> {
        fs.readFile('new_color_ palette.json',(err,data) => {
            if (err){
                console.log(err)
            }
            let colorPalette=JSON.parse(data)
            console.log(colorPalette)
        });
    })
 
})

