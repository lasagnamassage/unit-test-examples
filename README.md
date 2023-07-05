# What is this and how do I set it up?

This is a small app with some unit testing examples.
Below are explanations for each file

To set up:
1. run `npm i`
2. run `npm run test` to see CLI or `npm run coverage` to open coverage report

## validateEmail.js

This is a simple validation function using Regex to confirm
if a given email is valid or not. The associated tests are
located in `/tests/validateEmail.test.js` 

## add.js

This is a simple addition function that takes a callback.
This example is used to show how to mock out dependent
function calls. Remember: we want to focus *only* on the
function we're testing, not subsequent functions our focused
function calls. Mocking allows us to control these calls.
The associated tests are located in `/tests/add.test.js`

## server.js

This is an example of a function using a module. In our
associated test file, we mock out the express instance
in place of our own mock, as shown in `/test/server.test.js`

### FAQs

How do I get coverage reports?
    
    Run `open -a "Google Chrome" coverage/lcov-report/index.html` from command line


