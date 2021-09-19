const utility = require("../typeSpecifierUtility");
const types = utility.types;
const getType = (ext) => {
    for (let type in types) {
        const spType = types[type];
        for (let extType in spType) {       
            if (spType[extType] === ext) {           
                return type;
            };
        }
    }
return "unknown"
}

module.exports = getType;