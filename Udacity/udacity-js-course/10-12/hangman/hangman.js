class Hangman {
    constructor(word, remain) {
        this.word = word.toLowerCase().split('');
        this.remain = remain;
        this.guessed = [];
        this.status = 'playing'
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessed.includes(letter));

        if (this.remain === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    getStatusMessage() {
        if(this.status === 'playing') {
            return `Guesses left: ${this.remain}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else {
            return 'Great work! You guessed the work.'
        }
    }
    getPuzzle() {
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
    makeGuess(guess) {
        guess = guess.toLowerCase();
        const isUnique = !this.guessed.includes(guess);
        const isBadGuess = !this.word.includes(guess);

        if (this.status !== 'playing') {
            return 
        } 

        if (isUnique) {
            this.guessed.push(guess);
        }

        if (isUnique && isBadGuess) {
            this.remain--;
        }

        this.calculateStatus();
    }
}