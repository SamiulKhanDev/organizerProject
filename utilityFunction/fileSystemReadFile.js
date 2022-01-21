const fs = require("fs");
const path = require("path");
const createFolder= require("./createFolder");

const readFileName = (folderPath) => {
    const destination = path.join(folderPath, "organized");
    console.log(destination);
    let isFolderAlreadyPresent = fs.existsSync(destination);
        if (isFolderAlreadyPresent==false)
        {
            fs.mkdirSync(destination);
        }
        let filesInTheFolder = fs.readdirSync(folderPath);
              filesInTheFolder.forEach(file => {
                  const filePath = path.join(folderPath, file);
               
                  
                createFolder(file,filePath,destination)
        
            })

    

}

module.exports = readFileName;