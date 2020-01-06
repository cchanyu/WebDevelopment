let myBook = {
    title: '1984',
    author: 'Chanyu Choung',
    pageCount: 326
}

let otherBook = {
    title: '1972',
    author: 'Dr Howard Gin',
    pageCount: 752
}

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook);
let otherSummary = getSummary(otherBook);

// Challenge
let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * (5 / 9),
        kelvin: ((fahrenheit - 32) * (5 / 9)) + 273.15
    }
}

let temp = convertFahrenheit(74);
console.log(temp);