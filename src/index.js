import validator from "./validator.js";

const numberCard = document.getElementById("number-card"); //id numero input
const btnValidator = document.getElementById("btn-validator"); // id boton

//maximo minimo
numberCard.addEventListener("input", () => {
  //const num = numberCard.value;
  // this.value = v.slice(0, 16);
  //console.log(validator.maskify(numberCard.value));
});

//Is valid

btnValidator.addEventListener("click", () => {
  validator.isValid(numberCard.value);
});


