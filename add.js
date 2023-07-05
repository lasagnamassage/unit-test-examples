function add(a, b, callback) {
    console.log('doing stuff...')
    callback(a + b)
}

module.exports = add