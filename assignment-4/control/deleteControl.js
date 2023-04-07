let fs = require('fs')
const{responseData}=require("../js/constants")
const deleteEmployee=(req,res)=>{
    let employeeId = req.params.key;
    let buddy_list = JSON.parse(fs.readFileSync('./json/cdw_ace23_buddies.json', 'utf-8'))
    let employeeIdx = buddy_list.findIndex(emp => emp.employeeId == employeeId)

    if (employeeId) { buddy_list.splice(employeeIdx, 1) }

    fs.writeFileSync('./json/cdw_ace23_buddies.json', JSON.stringify(buddy_list))

    res.send(responseData.delete.success);
};
module.exports=deleteEmployee;