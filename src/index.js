//import validator from './validator.js';

//console.log(validator);


//Tomar  del input
let numberCard = document.getElementById("number-card");
//tomar boton
let btnValidator = document.getElementById("btn-validator");


// haciendo click en el boton, que tome lo del input

btnValidator.addEventListener("click", () => {
    //convertimos en array, separamos y reversamos
    let n = numberCard.value.split("").reverse();
    //recorremos
    n.forEach(element => {

    });
    //imprimir en consola
    console.log(n);

});






//enmascarar

// tomar mi inpud
// let numberCard = document.getElementById("number-card");

// tomar el boton

// cuando haga click en boton tome el input
// lo imprimirmos en pantalla