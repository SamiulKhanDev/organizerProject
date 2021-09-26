const fs = require("fs");
const path = require("path");
const createFolder= require("./createFolder");

const readFileName = (folderPath) => {
    const folderExits = fs.existsSync(folderPath);
    
    if (folderExits) {
        const destination = path.join(folderPath, "organized");
     try {
        fs.mkdirSync(destination);
     } catch (error) {
        console.log("this folder already has an organizer folder,please delete that to run this command".red);
        return;
     }
    //----------------------------------------
        fs.readdir(folderPath, (err, files) => {
            if (err) {
                console.log(err);
                return;
            }
            files.forEach(file => {
                const filePath = path.join(folderPath, file);
               createFolder(file,filePath,destination)
        
            })

        })

    } else {
        console.log("the provided path dose not exits,please entered a correct path");
        return;
    }
}

module.exports = readFileName;