const deiocu = document.getElementById(`deiocu`);
const fumei = document.getElementById(`fumei`);
const abriphub = document.getElementById(`abriphub`);
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


deiocu.onclick = function() {
    count1++;
    countlabel1.textContent = count1;
    localStorage.setItem("count1", count1);
}

fumei.onclick = function() {
    count2++;
    countlabel2.textContent = count2;
    localStorage.setItem("count2", count2);
}

abriphub.onclick = function() {
    count3++;
    countlabel3.textContent = count3;
    localStorage.setItem("count3", count3);
}