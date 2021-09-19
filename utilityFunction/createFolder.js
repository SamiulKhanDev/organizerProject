
const getType = require("./getFileType");
const moveFile = require("../utilityFunction/cutFileTospecificFolderInsideOrganizedFolder")
const fs = require("fs");
const path = require("path");
const createFolder = (fileName, filePath,fileDestination ) => {
    if (fs.lstatSync(filePath).isFile()) {
        const ext = path.extname(fileName).slice(1);   
        const type = getType(ext);
        moveFile(filePath, fileDestination, type);
        
    } else {
        return;
    }
}

module.exports = createFolder;