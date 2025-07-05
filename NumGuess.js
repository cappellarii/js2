const minNum = 1;
const maxNum = 100;
const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`guess the number between ${minNum} and ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid number.");
    }
    else if (guess < minNum || guess > maxNum){
        window.alert(`Please enter a number between ${minNum} and ${maxNum}.`);
    }
    else{
        attempts++;
        if(guess < randomNum){
        window.alert(`Your guess is too low. Try again!`);
        }
        else if(guess > randomNum){
        window.alert(`Your guess is too high. Try again!`);
        }
        else{
            window.alert(`correct! The number was ${randomNum}. It took you ${attempts} attempts.`);
            running = false;
        }
    }
}