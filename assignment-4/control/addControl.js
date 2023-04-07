let fs = require('fs')
const{responseData}=require("../js/constants")
const addEmployee=(req,res)=>{
    let buddies_list = JSON.parse(fs.readFileSync('./json/cdw_ace23_buddies.json', 'utf-8'))
    buddies_list.push(req.body)
    fs.writeFile('./json/cdw_ace23_buddies.json', JSON.stringify(buddies_list), (err) => {
        if (err) {
            console.log(err)
            res.send(responseData.create.failure) ;
        }
    })
    res.send(responseData.create.success) ;
};
module.exports=addEmployee
