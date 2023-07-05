const validateEmail = require('../validateEmail')

test('validateEmail should return true for a valid email', () => {
    const validEmail = 'codepath@example.com'
    const isValid = validateEmail(validEmail)
    expect(isValid).toBe(true)
})

test('validateEmail should return false for an invalid email', () => {
    const validEmail = 'lollolololl'
    const isValid = validateEmail(validEmail)
    expect(isValid).toBe(false)
})