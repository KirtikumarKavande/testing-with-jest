const mathOperation=require("../calculator")
describe('calculator test', () => {
    test('adding 1 and 2', () => { 
        expect(mathOperation.add(1,2)).toBe(3)
     })
});
