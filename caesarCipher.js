function caesarCipher(string, shift = 3){
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
return string.split('').map(char => {
    const lowerchar = char.toLowerCase();
    const isUpper = char !==lowerchar;
    const index = alphabet.indexOf(lowerchar);
    if(index === -1) return char;
    const newIndex = (index + shift)% 26;
    const shiftChar = alphabet[newIndex]
    return isUpper ? shiftChar.toUpperCase() : shiftChar;
}).join('')
}

module.exports = caesarCipher;