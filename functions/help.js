const helpFn = () => {
    const helpString = `
    node cli.js branch  "directory path" 
    node cli.js organize "directory path" 
    node cli.js help->to get help
    `
    console.log(helpString);
    
}

module.exports = helpFn;