let fs = require('fs')
const selectAllEmployee=(req,res)=>{
    res.send(fs.readFileSync('./json/cdw_ace23_buddies.json', 'utf-8'))
};
module.exports=selectAllEmployee;