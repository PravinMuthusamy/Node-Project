const filePath = "./cdw_ace23_buddies.json";
const responseData ={
    
    create:{
        success:"Buddy added successfully!",
        failure:"Can't add Buddy!"
    },
    read:{
        success:"Buddy read successfully!",
        failure:"Error in Reading!"
    },
    update:{
        success:"Buddy updated successfully!",
        failure:"Error in Updating!"
    },
    delete:{
        success:"Buddy deleted successfully!",
        failure:"Error in deleting!"
    }

};

module.exports = {
filePath,
responseData,
};