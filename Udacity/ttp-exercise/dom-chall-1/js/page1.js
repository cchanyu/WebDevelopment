const jan = document.querySelector('#btn3').addEventListener("mouseover", function (e) {
    
    const summary = document.createElement('h2');
    summary.textContent = `I SAID DO NOT HOVER OVER ME!!!`;
    document.querySelector('body').appendChild(summary);
});

const jan2 = document.querySelector('#btn3').addEventListener('click', function (e) {
    document.querySelectorAll("h2").forEach(function(g) {
        g.remove();
    });
});
