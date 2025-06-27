const contador1 = document.getElementById(`contador1`);
const contador2 = document.getElementById(`contador2`);
const contador3 = document.getElementById(`contador3`);
const counter = document.getElementById(`counter`);
const countlabel1 = document.getElementById(`countlabel1`);
const countlabel2 = document.getElementById(`countlabel2`);
const countlabel3 = document.getElementById(`countlabel3`);

let count1 = parseInt(localStorage.getItem("count1")) || 0;
let count2 = parseInt(localStorage.getItem("count2")) || 0;
let count3 = parseInt(localStorage.getItem("count3")) || 0;

countlabel1.textContent = count1;
countlabel2.textContent = count2;
countlabel3.textContent = count3;


contador1.onclick = function() {
    count1++;
    countlabel1.textContent = count1;
    localStorage.setItem("count1", count1);
}

contador2.onclick = function() {
    count2++;
    countlabel2.textContent = count2;
    localStorage.setItem("count2", count2);
}

contador3.onclick = function() {
    count3++;
    countlabel3.textContent = count3;
    localStorage.setItem("count3", count3);
}