const check_regex = /^[0-9a-zA-Z]{17}[1a-p]{1}$/

module.exports = v => check_regex.test(v+'')