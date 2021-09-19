const fs = require("fs");
const path = require("path");
const branchHelper = (dirPath,indent) => {

    const isFile = fs.lstatSync(dirPath).isFile();
    if (isFile) {
        const fileName = path.basename(dirPath);
        console.log(indent+"-------"+fileName);
        
    } else {
        const folderName = path.basename(dirPath);
        console.log(indent + "------->" + folderName);
        fs.readdirSync(dirPath).forEach(child => { branchHelper(path.join(dirPath, child), indent + "\t") });
        
    }
    
}


module.exports = branchHelper;