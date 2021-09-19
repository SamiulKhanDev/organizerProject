const fs = require("fs");
const path = require("path");
const moveFile = (src,dest,type) => {
    // console.log(src+" "+dest+" "+type);
    const fileSpecificFolder = path.join(dest, type);
    const isFileSpecificFolderPresent = fs.existsSync(fileSpecificFolder);
    if (!isFileSpecificFolderPresent) {
        fs.mkdirSync(fileSpecificFolder);
    }
    
    const fileName = path.basename(src);
    const destFilePath = path.join(fileSpecificFolder, fileName);
    // fs.copyFileSync(src, destFilePath);
    fs.rename(src, destFilePath, (err) => {
        // console.log(err);
        return;
        
    })

    console.log(`${fileName} copied to ${destFilePath}`);
    
    
    
}

module.exports = moveFile;