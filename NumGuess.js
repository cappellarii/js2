const minNum = 1;
const maxNum = 100;
const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`adivinhe o numero entre ${minNum} e ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("por favor coloque um numero valido.");
    }
    else if (guess < minNum || guess > maxNum){
        window.alert(`por favor coloque um numero entre ${minNum} e ${maxNum}.`);
    }
    else{
        attempts++;
        if(guess < randomNum){
        window.alert(`chutou muito baixo, tente denovo.`);
        }
        else if(guess > randomNum){
        window.alert(`chutou alto demais, tente denovo.`);
        }
        else{
            window.alert(`acertou! o numero é ${randomNum}. e voce tentou ${attempts} vezes.`);
            running = false;
        }
    }
}