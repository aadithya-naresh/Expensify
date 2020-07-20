const generateGreeting = (name) =>  `hello ${name}`

test('checking name',() =>{
    const result = generateGreeting('aadi')
    expect(result).toBe('hello aadi')
})