const mathOperation=require("../calculator")
describe('hooks calculator', () => {
beforeEach(()=>{
console.log("before each called") 
})

afterEach(()=>{
console.log("after each called") 
    
})

beforeAll(()=>{
    console.log("before all called") 

})

afterAll(()=>{
console.log("after all called") 

})

test('adding 4 and 6', () => { 
    expect(mathOperation.add(4,6)).toBe(10)
    expect(mathOperation.add(7,4)).toBe(11)
 })

 test('adding 4 and 6', () => { 
    expect(mathOperation.sub(4,6)).toBe(-2)
 })
    
});
