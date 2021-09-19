const fs = require("fs");
const path = require("path")
const branchHelper = require("../utilityFunction/BracnchHelper");
const branchFn = (dirPath) => {
    if (dirPath == undefined) {
        process.cwd();
        branchHelper(process.cwd(),"");
        return;
    }
   try {
    const folderPath = path.join(__dirname, dirPath);
    const folderExits = fs.existsSync(folderPath);
    if (folderExits) {
        branchHelper(folderPath,"");
    } else {
        console.log("the provided path dose not exits,please entered a correct path 1");
        return;
    }
    
   } catch (error) {
    console.log("the provided path dose not exits,please entered a correct path");
    return;
       
   }
}

module.exports = branchFn;