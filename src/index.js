//import validator from './validator.js';

//console.log(validator);


//VALIDAR
//Tomar  del input y boton

const numberCard = document.getElementById("number-card");
const btnValidator = document.getElementById("btn-validator");



btnValidator.addEventListener('click', () => {
        let numberCardR = numberCard.value.toString().split("").reverse();
        let resultadoFinal = ""

        numberCardR.forEach((value, index) => {
            if (index % 2 === 0) {
                resultadoFinal += value
            } else {
                let multiplicacion = value * 2;

                if (multiplicacion <= 9) {
                    resultadoFinal += multiplicacion
                } else {
                    let nuevo = multiplicacion.toString().split("")
                    let nuevo2 = nuevo.reduce((acumular, num_actual) => {
                        return parseInt(acumular) + parseInt(num_actual)
                    })
                    resultadoFinal += nuevo2
                }
            }
        });

        let resultadoFinalSuma = resultadoFinal.split("").reduce((acum, num) => {
            return parseInt(acum) + parseInt(num)
        })
        if (resultadoFinalSuma % 10 === 0) {
            alert("numero valido " + resultadoFinalSuma)
        } else {
            alert("numero invalido " + resultadoFinalSuma)
        }
        console.log(resultadoFinalSuma)
    }

)




/*
enmascarar
tomar los numeros cuando el cliente escribe en el input



*/