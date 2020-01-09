const Hangman = function (word, guess) {
    this.word = word.toLowerCase().split('');
    this.guess = guess;
    this.guessed = [];
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';

    this.word.forEach((letter) => {
        if (this.guessed.includes(letter || letter === ' ')) {
            puzzle += letter;
        } else {
            puzzle += '*'
        }
    })

    return puzzle;
}

const game1 = new Hangman('word', 5);
console.log(game1.getPuzzle());

const game2 = new Hangman('hardest', 7);
console.log(game2.getPuzzle());
