const decrease = document.getElementById(`decrease`);
const increase = document.getElementById(`increase`);
const reset = document.getElementById(`reset`);
const counter = document.getElementById(`counter`);
const countlabel = document.getElementById(`countlabel`);

let count = 0;

decrease.onclick = function() {
    count--;
    countlabel.textContent = count;
}
increase.onclick = function() {
    count++;
    countlabel.textContent = count;
}
reset.onclick = function() {
    count = 0;
    countlabel.textContent = count;
}