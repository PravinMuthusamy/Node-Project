let fs = require('fs')
const selectEmployee=(req,res)=>{
    let buddy_list = JSON.parse(fs.readFileSync('./json/cdw_ace23_buddies.json', 'utf-8'))
    let employee = buddy_list.filter(emp => {
        return emp.employeeId == req.params.key || emp.realName == req.params.key
    })
    res.json(employee)
};
module.exports=selectEmployee;