test('check truthy', () => { 
    var name="kirtikumar"
    var number=null
    expect(number).toBeNull()
    expect(name).not.toBeNull()
    expect(name).toBeTruthy()
    expect(number).toBeFalsy()
 })