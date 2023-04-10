const { readFile, writeFile } = require('../utils/utils');

// add employee service
const addData = (data)=>{
    try {
        const { status, data: jsonData } = readFile('./data/cdw_ace23_buddies.json');
        
        if (status) {
            for (let i = 0; i < jsonData.length; i++) {
                if (jsonData[i].employeeId === data.employeeId) {
                    return { status: false, error: err };
                }
            }
            jsonData.push(data);
            const { status: writeStatus } = writeFile('./data/cdw_ace23_buddies.json', jsonData);
            return { status: writeStatus };
        }
        return { status: false };
    } catch (err) {
        return { status: false, error: err };
    }
};

// delete employee service
const deleteData = (data)=>{
    try {
        const { status, data: jsonData } = readFile('./data/cdw_ace23_buddies.json');
        if (status) {
            // const employee = jsonData.find(emp => emp.employeeId === data);
            // if (!employee) {
            //     return { status: false, error: err };
            // }
            const initialLength = jsonData.length;
            const updatedData = jsonData.filter(emp => emp.employeeId !== data);
            if(initialLength > updatedData.length)
            {const { status: writeStatus } = writeFile('./data/cdw_ace23_buddies.json', updatedData);
            return { status: writeStatus };
            }
            else{
                return { status: false, error: err };
            }
        }
        return { status: false };
    } catch (err) {
        return { status: false, error: err };
    }  
};

// select all employee service
const selectAllData= ()=>{
    try {
        const { status, data: jsonData } = readFile('./data/cdw_ace23_buddies.json');
        return { status, data: jsonData };
    } catch (err) {
        return { status: false, error: err };
    } 
};

// select employee service
const selectData= (key)=>{
    try {
        const { status, data: jsonData } = readFile('./data/cdw_ace23_buddies.json');
        if (status) {
            const employee = jsonData.filter(emp => {
                return emp.employeeId == key || emp.realName == key
            })
            if (employee.length === 0) {
                return { status: false, error: err};
            }
            return { status: true, data: employee };
        }
        return { status: false };
    } catch (err) {
        return { status: false, error: err };
    } 
};

// update employee service
const updateData = (data,employeeId)=>{
    try {
        const { status, data: jsonData } = readFile('./data/cdw_ace23_buddies.json');
        if (status) {
            const employeeIdx = jsonData.findIndex(emp => emp.employeeId == employeeId);
            if (employeeIdx === -1) {
                return { status: false, error: err };
            }
            const employee = jsonData[employeeIdx];
            if (data.realName) { employee.realName = data.realName; }
            if (data.nickName) { employee.nickName = data.nickName; }
            if (data.dob) { employee.dob = data.dob; }
            if (data.hobbies) { employee.hobbies = data.hobbies; }
            const { status: writeStatus } = writeFile('./data/cdw_ace23_buddies.json',jsonData);
            return{status:writeStatus}
        }
        return { status: false }; 
    }catch (err) {
        return { status: false, error: err };
    } 
};
    
module.exports={addData,deleteData,selectAllData,selectData,updateData}
            