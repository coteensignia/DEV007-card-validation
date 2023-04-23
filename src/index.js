import validator from "./validator.js";

const paginaUno = document.getElementById("paginauno");
const paginaDos = document.getElementById("paginados");
const back = document.getElementById("back");
const esono = document.getElementById("esono")

const numberCard = document.getElementById("number-card"); //id numero input
const btnValidator = document.getElementById("btn-validator"); // id boton

paginaDos.style.display = "none"

paginaUno.addEventListener('click', () => {
  paginaUno.style.display = "none"
  paginaDos.style.display = "flex"
})

back.addEventListener('click', () => {
  paginaUno.style.display = "flex"
  paginaDos.style.display = "none"
})



//maximo minimo masky
numberCard.addEventListener("input", () => {
  const num = numberCard.value.slice(0, 16);
  numberCard.value = validator.maskify(num);
  console.log(validator.maskify(num))
});



//Is valid

btnValidator.addEventListener("click", () => {
  let result = validator.isValid(numberCard.value);
  if (result === true) {
    esono.innerHTML = '<p class="sies"> Es Válida </p>';
  } else {
    esono.innerHTML = '<p class="noes"> NO Válida </p>';
  }
});


