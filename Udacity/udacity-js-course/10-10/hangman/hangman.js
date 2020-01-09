const Hangman = function (word, remain) {
    this.word = word.toLowerCase().split('');
    this.remain = remain;
    this.guessed = [];
    this.status = 'playing'
}

Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every((letter) => this.guessed.includes(letter));

    if (this.remain === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
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

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessed.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (isUnique) {
        this.guessed.push(guess);
    }

    if (isUnique && isBadGuess) {
        this.remain--;
    }
}