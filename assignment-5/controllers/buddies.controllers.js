let buddiesService=require('../services/buddies.service');
let logger=require('../config/logger.config');
const { error } = require('console');
// add employee
const addEmployee=(req,res)=>{
    logger.info(`${req.originalUrl} - ${req.method} - ${req.ip}`);
        let data=buddiesService.addData(req.body);
        if(data.status){
                res.status(200).send({message:"buddy added"});
        }
        else if(!data.status && error){
                res.status(404).send("Employee with this employeeId already exists...!");
        }
        else{
                let error=data.error;
                logger.error(`${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
                res.status(404).send("File not found");
        }
        
};
// delete employee
const deleteEmployee=(req,res)=>{
    logger.info(`${req.originalUrl} - ${req.method} - ${req.ip}`);
    let data=buddiesService.deleteData(req.params.key);
    if(data.status){
        res.status(200).send({message:"buddy deleted"});
    }
    else if(!data.status && error){
        res.status(404).send("Employee with this employeeId does not exists...!");
    }
    else{
        let error=data.error;
        logger.error(`${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        res.status(404).send("File Not Found");
    }    
};
// select all employee
const selectAllEmployee=(req,res)=>{
    logger.info(`${req.originalUrl} - ${req.method} - ${req.ip}`);
    let employeeData=buddiesService.selectAllData();
    if(employeeData.status){
        res.status(200).send(employeeData.data);
    }else{
        let error=employeeData.error;
        logger.error(`${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        res.status(404).send({message:"File not Found"});
    }
    
};
// select employee
const selectEmployee=(req,res)=>{
    logger.info(`${req.originalUrl} - ${req.method} - ${req.ip}`);
    let employeeData=buddiesService.selectData(req.params.key);
    if(employeeData.status){
        res.status(200).json(employeeData.data);
    }
    else if(!employeeData.status && error){
        res.status(404).send("Employee with this employeeId does not exists...!");
    }
    else{
        let error=employeeData.error;
        logger.error(`${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        res.status(404).send("File Not Found");
    }
};
// update employee
const updateEmployee=(req,res)=>{
    logger.info(`${req.originalUrl} - ${req.method} - ${req.ip}`);
    let data=buddiesService.updateData(req.body,req.params.key);
    if(data.status){
        res.status(200).send({message:"buddy updated",data:data.data});
    }
    else if(!data.status && error){
        res.status(404).send("Employee with this employeeId does not exists...!");
}
    else{
        let error=data.error;
        logger.error(`${error} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        res.status(404).send("File not Found");
    }
};

module.exports={
    addEmployee,deleteEmployee,selectAllEmployee,selectEmployee,updateEmployee
}