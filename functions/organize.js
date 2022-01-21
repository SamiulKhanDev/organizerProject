const path = require("path")
const fs = require("fs");
const readFileName = require("../utilityFunction/fileSystemReadFile");
let app = false;
let archives = false;
const organizeFn = (dirPath) => {

    let isPathValid = fs.existsSync(dirPath);
    if (isPathValid)
    {
        readFileName(dirPath);    
    }
    else
    {
        console.log("Please provide a valid path".red);
            
    }

}

module.exports = organizeFn;