document.querySelector('#btn1').addEventListener("click", function (e) {
    const p1 = document.querySelector('#p1');
    const p2 = document.querySelector('#p2');
    p1.textContent = "I am better";
    p2.textContent = " ";
});

document.querySelector('#btn2').addEventListener("click", function (e) {
    const p1 = document.querySelector('#p1');
    const p2 = document.querySelector('#p2');
    p2.textContent = "No I am better";
    p1.textContent = " ";
});