import validator from "./validator.js";

//id para paginas
const paginaUno = document.getElementById("paginauno");
const paginaDos = document.getElementById("paginados");
const back = document.getElementById("back");
const esono = document.getElementById("esono");

// id 
const numberCard = document.getElementById("number-card"); //id numero input
const btnValidator = document.getElementById("btn-validator"); // id boton

paginaDos.style.display = "none";

//eventos
paginaUno.addEventListener("click", () => {
  paginaUno.style.display = "none";
  paginaDos.style.display = "flex";
});

back.addEventListener("click", () => {
  paginaUno.style.display = "flex";
  paginaDos.style.display = "none";
});

//Is valid

btnValidator.addEventListener("click", () => {
  const result = validator.isValid(numberCard.value);
  const maski = validator.maskify(numberCard.value);

  if (numberCard.value === "") {
    alert("Debes ingresar un número");
    return
  }
// maski

  if (result === true) {
    esono.innerHTML = '<p class="sies"> Es Válida  </p> ' + maski;
  } else {
    esono.innerHTML = '<p class="noes"> NO Válida  </p> ' + maski;
  }

});
