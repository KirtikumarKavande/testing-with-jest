const mathOperation=require("../calculator")
describe('calculator test', () => {
    test('adding 1 and 2', () => { 
        expect(mathOperation.add(1,2)).toBe(3)
        expect(mathOperation.add(1,2)).not.toBe(7)
     })

     test('subtract 2 from 1', () => { 
        expect(mathOperation.sub(2,1)).toBe(1)

      })
});
