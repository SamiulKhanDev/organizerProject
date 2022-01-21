const fs = require("fs");
const path = require("path")
const colors = require("colors")
const branchHelper = require("../utilityFunction/BracnchHelper");
const branchFn = (dirPath) => {
    if (dirPath == undefined)
    {
        dirPath = path.join(__dirname,"../../");    
    }
    let ifPathValid = fs.existsSync(dirPath);
    
    if (ifPathValid)
    {
        let isDirectory = fs.lstatSync(dirPath).isDirectory();
        if (isDirectory)
        {
            branchHelper(dirPath, "");
            console.log("Done Branching".red);        
        }
        else
        {
            console.log("the provided path is not Valid,please entered a correct Folder path".red);
        }
        
    }
    else
    {
        console.log("the provided path dose not exits,please entered a correct path".red);
    }

//     if (dirPath == undefined) {
//         process.cwd();
//         branchHelper(process.cwd(), "");
//         console.log("Done Branching".red);
//         return;
//     }
//    try {
//     const folderPath = path.join(__dirname, dirPath);
//     const folderExits = fs.existsSync(folderPath);
//     if (folderExits) {
//         branchHelper(folderPath, "");
//         console.log("Done Branching".red);
//     } else {
//         console.log("the provided path dose not exits,please entered a correct path".red);
//         return;
//     }
    
//    } catch (error) {
//     console.log("the provided path dose not exits,please entered a correct path".red);
//     return;
       
//    }
}

module.exports = branchFn;