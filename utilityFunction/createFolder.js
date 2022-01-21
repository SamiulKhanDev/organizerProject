
const getType = require("./getFileType");
const moveFile = require("../utilityFunction/cutFileTospecificFolderInsideOrganizedFolder")
const fs = require("fs");
const path = require("path");
const createFolder = (fileName, filePath, fileDestination) => {
    let isFile = fs.lstatSync(filePath).isFile();
    if (isFile) {
        const ext = path.extname(fileName).slice(1);   
        const type = getType(ext);
        moveFile(filePath, fileDestination, type);   
    }
}

module.exports = createFolder;