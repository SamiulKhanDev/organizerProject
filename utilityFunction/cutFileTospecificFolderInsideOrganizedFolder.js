const fs = require("fs");
const path = require("path");
const moveFile = (src,dest,type) => {
    const fileSpecificFolder = path.join(dest, type);

    
    const isFileSpecificFolderPresent = fs.existsSync(fileSpecificFolder);
    if (isFileSpecificFolderPresent==false) {
        fs.mkdirSync(fileSpecificFolder);
    }
    
    const fileName = path.basename(src);
    const destFilePath = path.join(fileSpecificFolder, fileName);
    fs.copyFileSync(src, destFilePath);
    console.log(`${fileName} copied to ${destFilePath}`.green);
    // console.log(`${file.toUpperCase()} copied to ${folderPath.toUpperCase()}`.green);
    fs.unlinkSync(src);
    
    
    
}

module.exports = moveFile;