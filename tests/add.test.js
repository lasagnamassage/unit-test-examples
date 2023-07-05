const add = require('../add')

describe('validateEmail', () => {
    beforeAll(() => {
        // runs once before running tests
    })
    beforeEach(() => {
        // runs before EVERY test
    })
    afterAll(() => {
        // runs once after running tests
    })
    afterEach(() => {
        // runs after EVERY test
    })
    test('calls callback with arguments added', () => {
        const lol = jest.fn() // mocking a function so we don't actually run the implementation
        add(1, 2, lol)
        expect(lol).toHaveBeenCalledWith(3)
    })
})
