
    const toUpperCase = require("./toUppercase")
    function capitalize(word){
        return toUpperCase(word[0])+ word.slice(1)
    }
    module.exports = capitalize