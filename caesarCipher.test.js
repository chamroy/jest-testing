
const caesarCipher = require("./caesarCipher")
test('encrypt using Caesar Cipher', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})