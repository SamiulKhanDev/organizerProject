const fs = require("fs");
const path = require("path")
const colors = require("colors")
const branchHelper = require("../utilityFunction/BracnchHelper");
const branchFn = (dirPath) => {
    if (dirPath == undefined) {
        process.cwd();
        branchHelper(process.cwd(), "");
        console.log("Done Branching".red);
        return;
    }
   try {
    const folderPath = path.join(__dirname, dirPath);
    const folderExits = fs.existsSync(folderPath);
    if (folderExits) {
        branchHelper(folderPath, "");
        console.log("Done Branching".red);
    } else {
        console.log("the provided path dose not exits,please entered a correct path".red);
        return;
    }
    
   } catch (error) {
    console.log("the provided path dose not exits,please entered a correct path".red);
    return;
       
   }
}

module.exports = branchFn;