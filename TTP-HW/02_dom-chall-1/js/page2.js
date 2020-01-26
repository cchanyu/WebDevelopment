// password
const correctpw = ['12345678']

// select button
const jan2 = document.querySelector('#btn4').addEventListener('click', function (e) {
    // erase if there is a h2 text
    document.querySelectorAll("h2").forEach(function(g) {
        g.remove();
    });

    const wrongPw = () => {
        const summary = document.createElement('h2');
        summary.textContent = `Wrong Password, please re enter your password.`;
        document.querySelector('#h1-1').appendChild(summary);
        return 'wrong password';
    }

    const rightPw = () => {
        document.querySelectorAll("#h1-1").forEach(function(c) {
            const summary2 = document.createElement('h2');
            summary2.textContent = 'Welcome. Correct Password';
            c.appendChild(summary2);
        });
        return 'correct password';
    }

    var x = document.getElementById("password").value;
    const message2 = correctpw == x ? rightPw() : wrongPw();
    console.log(message2);
});
