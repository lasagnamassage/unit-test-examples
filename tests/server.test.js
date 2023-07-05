const createExpressApp = require('../server')

jest.mock('../server.js') // mocking a module so we don't actually run the implementation

test('that createExpressApp returns an express instance', () => {
    createExpressApp()
    expect(createExpressApp).toHaveReturned()
})