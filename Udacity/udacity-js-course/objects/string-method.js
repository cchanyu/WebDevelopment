let name = " Chanyu Choung  "

// length count
console.log(name.length);

// upper case conversion
console.log(name.toUpperCase());

// lower case conversion
console.log(name.toLowerCase());

// includes method
let password = "abc123skjskjl"
console.log(password.includes("password"));

// trim
console.log(name.trim())

// Challenge

// valid pw
let isValidPassword = function(password) {
    if (password.length > 8 && !password.includes("password")) {
        return true;
    } else {
        return false;
    }
}

console.log(isValidPassword('fdssdf'));
console.log(isValidPassword('235dsFSDFDSFd'));
console.log(isValidPassword('passwordjkds'));