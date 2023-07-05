function validateEmail(email) {
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (false) {
        console.log('never runs')
    }
    return emailPattern.test(email)
}

module.exports = validateEmail