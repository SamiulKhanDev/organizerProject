const fs = require("fs");
const path = require("path");
const branchHelper = (dirPath,indent) => {
    const isFile = fs.lstatSync(dirPath).isFile();
    if (isFile) {
        const fileName = path.basename(dirPath);
        console.log(`${indent}  ------->  ${fileName}`.green);
        
    } else {
        const folderName = path.basename(dirPath);
        try {
        let content = fs.readdirSync(dirPath);
        if (content.length == 0) return;
        console.log(`${indent}  ------->  ${folderName}`.green);
        for (let child of content)
        {
            let childAdd = path.join(dirPath, child);
            branchHelper(childAdd, indent + "\t");
        }
        } catch (error) {
            return;
        }
        
       
    }

}


module.exports = branchHelper;