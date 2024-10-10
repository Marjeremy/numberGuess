function numberGuess() {
    const guessNumber = Math.floor(Math.random() * 10) + 1;
    let guess = 0;

    while (guess !== guessNumber) {
        guess = parseInt(prompt("guess a number between 1 and 10"));

        if (guess > numberGuess) {
            alert("too high!");
        }else if(guess < guessNumber) {
            alert("too low!");
        }else{
            alert("you guess it! the number was" + guessNumber);
        }
    }
}