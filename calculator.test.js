
const calculator = require("./calculator")
test("performed basic arithmetic operation", () => {
    const a = 40;
    const b = 30;
    expect(calculator.add(a,b)).toEqual(70)
    expect(calculator.sub(a,b)).toEqual(10);
    expect(calculator.multiply(a,b)).toEqual(1200);
    expect(calculator.divide(a,b)).toBeGreaterThan(1);
    
})