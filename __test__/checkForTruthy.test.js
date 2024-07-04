test('check truthy', () => { 
    var name="kirtikumar"
    var number=null
    let randomNumber=10
    expect(number).toBeNull()
    expect(name).not.toBeNull()
    expect(name).toBeTruthy()
    expect(number).toBeFalsy()

    expect(randomNumber).toBeLessThan(20)
 })