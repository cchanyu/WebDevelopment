// HTTP (Hyper Text Transfer Protocol)
// Request - what do we want to do
// Response - what was actually done

const puzzleEl = document.getElementById('puzzle');
const guessesEl = document.getElementById('guesses');
const game1 = new Hangman('word', 5);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;
})

// making an http request
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4){
        const data = JSON.parse(e.target.responseText);
        console.log(data);
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle');
request.send();