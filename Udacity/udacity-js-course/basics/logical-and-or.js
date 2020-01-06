let temp = 65;

// Logical and operator
if (temp >= 60 && temp <= 90) {
    console.log("It is pretty nice out");
} else if (temp <= 0  || temp >= 120) {
    console.log("Do not go outside!");
} else {
    console.log("Do what you want.");
}

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Both should eat veggies");
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("One can eat freely");
} else {
    console.log("Both can eat freely");
}