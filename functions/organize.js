const path = require("path")
const readFileName = require("../utilityFunction/fileSystemReadFile");
let app = false;
let archives = false;
const organizeFn = (dirPath) => {
    if (dirPath == undefined) {
        dirPath = process.cwd();
        
    }
    readFileName(dirPath);

}

module.exports = organizeFn;