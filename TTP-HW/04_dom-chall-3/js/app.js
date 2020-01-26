let currencySet1 = '';
let currencySet2 = '';
let currencyInput1 = '';
let currencyInput2 = '';

// Fetch the API and Conversion process
const conversion1 = () => {
    let amount = currencyInput1;

    fetch (`https://api.exchangerate-api.com/v4/latest/${currencySet1}`)
    .then(function(resp) {
        return resp.json();
    }).then(function(data) {
        amount = amount * data.rates[currencySet2];
        document.getElementById('converted1').value = (amount);
    })
    return amount;
}

const conversion2 = () => {
    let amount = currencyInput2;

    fetch (`https://api.exchangerate-api.com/v4/latest/${currencySet2}`)
    .then(function(resp) {
        return resp.json();
    }).then(function(data) {
        amount = amount * data.rates[currencySet1];
        document.getElementById('converted1').value = (amount);
    })
    return amount;
}


// Grab the currency setter
const setCurrency = () => {
    currencySet1 = document.getElementById("countryCurrency1").value;
    currencySet2 = document.getElementById("countryCurrency2").value;
}

setCurrency();

// Grab the input of user
document.getElementById('currencyInput1').addEventListener("input", function(e) {
    currencyInput1 = e.target.value;
})
document.getElementById('currencyInput2').addEventListener("input", function(e) {
    currencyInput2 = e.target.value;
})

// Clicks the convert
document.getElementById('convert1').addEventListener("click", function(e) {
    let result;
    let box;
    // Runs currency
    if(currencyInput1 != ''){
        result = conversion1();
        box = document.getElementById("converted1");
        box.value = result;
    } else if (currencyInput2 != '') {
        result = conversion2();
        box = document.getElementById("converted1");
        box.value = result;
    } else {
        window.confirm("Please type a number!");
    }
})

// Reset the page
document.getElementById('reset1').addEventListener("click", function(e) {
    location.reload();
})