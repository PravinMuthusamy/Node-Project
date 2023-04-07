let fs = require('fs')
const{responseData}=require("../js/constants")
const updateEmployee=(req,res)=>{
    let employeeId = req.query.employeeId
    let updatedRealName = req.query.realName
    let updatedNickName = req.query.nickName
    let updatedDOB=req.query.dob;
    let updatedHobby = req.query.hobbies
    let buddy_list = JSON.parse(fs.readFileSync('./json/cdw_ace23_buddies.json', 'utf-8'))
    let employeeIdx = buddy_list.findIndex(emp => emp.employeeId == employeeId)

    if (updatedRealName) { buddy_list[employeeIdx].realName = JSON.parse(updatedRealName); }

    if (updatedNickName) { buddy_list[employeeIdx].nickName = JSON.parse(updatedNickName); }
    
    if (updatedDOB) { buddy_list[employeeIdx].dob = JSON.parse(updatedDOB); }

    if (updatedHobby) { buddy_list[employeeIdx].hobbies = JSON.parse(updatedHobby); }

    fs.writeFileSync('./json/cdw_ace23_buddies.json', JSON.stringify(buddy_list))
    res.send(responseData.update.success);
};
module.exports=updateEmployee;