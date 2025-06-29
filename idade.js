const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const resultelement = document.getElementById("resultelement");
let age;


mysubmit.onclick = function() {
    age = mytext.value;
    age = Number(age);

    if(age >= 100){
    resultelement.textContent = `you are a centenarian.`;
}
    else if(age == 0){
    resultelement.textContent = `you cant enter, you was not born yet.`;
}
    else if(age >= 18) {
    resultelement.textContent = `expired.`;
}
    else if(age < 0){
    resultelement.textContent = `Invalid age.`;
}
    else {
    resultelement.textContent = `not expired >:)`;
}
};