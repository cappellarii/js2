const mybutton = document.getElementById("btn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 100;
let randomnum;

mybutton.onclick = function(){
    randomnum = Math.floor(Math.random() * max) + min;
    label1.textContent = randomnum;
    randomnum = Math.floor(Math.random() * max) + min;
    label2.textContent = randomnum;
    randomnum = Math.floor(Math.random() * max) + min;
    label3.textContent = randomnum;
}
