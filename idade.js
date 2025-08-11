const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const resultelement = document.getElementById("resultelement");
let age;


mysubmit.onclick = function() {
    age = mytext.value;
    age = Number(age);

    if(age >= 100){
    resultelement.textContent = `tu é velho.`;
}
    else if(age == 0){
    resultelement.textContent = `voce ainda nem nasceu.`;
}
    else if(age >= 18) {
    resultelement.textContent = `voce é maior de idade.`;
}
    else if(age < 0){
    resultelement.textContent = `idade invalida.`;
}
    else {
    resultelement.textContent = `voce é de menor`;
}
};