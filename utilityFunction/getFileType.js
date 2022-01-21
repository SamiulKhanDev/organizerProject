const types = require("../typeSpecifierUtility");

const getType = (ext) => {
    if (types.hasOwnProperty(ext))
    {
        return types[ext];
    }
     return "Unknown"
}

module.exports = getType;