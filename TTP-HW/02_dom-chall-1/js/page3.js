// select button
const jan3 = document.querySelector('#btn5').addEventListener('click', function (e) {
    e.preventDefault();
    const pi = Math.PI;
    let r = document.getElementById("sphere").value;
    const calc = (4/3 * pi * (Math.pow(r, 3)));
    const summary = document.createElement('h2');
    summary.textContent = calc;
    document.querySelector('#h1-1').appendChild(summary);
});

// sphere formula
// ((4/3) * pi * r) ^ 3

// sample :
// 5 radius = 523.6