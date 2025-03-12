const minNumber = 1;
const maxNumber = 100;
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let guessNumber = 0;
let attempts = 0;
let running = true;

while (running) {
 
    guessNumber = parseInt(window.prompt("Guess a number between 1 and 100: "));

    if(isNaN(guessNumber)) {
        window.alert("Please enter a valid number");
        running = true;
    }
    else if (guessNumber < minNumber || guessNumber > maxNumber) {
        window.alert("Please enter a number between 1 and 100");
        running = true;
    }
    else {
        attempts++;
        if (guessNumber < randomNumber) {
            window.alert("Higher");
            running = true;
        }
        else if (guessNumber > randomNumber) {
            window.alert("Lower");
            running = true;
        }
        else {
            window.alert(`Congratulations! You guessed the number in ${attempts} attempts
            The number was ${randomNumber}`);
            running = false;
            }
    }

}