// custom error, if the user inputs something invalid

const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25;
    } else {
        throw Error('argument must be a number');
    }
}

try {
    const result = getTip(true);
    console.log(result);
} catch (e) {
    console.log('catch block is running');
}

