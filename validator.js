const validator = {
  isValid: function (creditcardNumber) {
    const numberCardR = creditcardNumber.split("").reverse();
    let resultadoFinal = "";

    numberCardR.forEach((value, index) => {
      if (index % 2 === 0) {
        resultadoFinal += value;
      } else {
        const multiplicacion = value * 2;

        if (multiplicacion <= 9) {
          resultadoFinal += multiplicacion;
        } else {
          const nuevo = multiplicacion.toString().split("");
          resultadoFinal += parseInt(nuevo[0]) + parseInt(nuevo[1]);
        }
      }
    });

    let total = 0;
    resultadoFinal = resultadoFinal.split("");

    resultadoFinal.forEach((value) => {
      total += parseInt(value);
    });

    if (total % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },

  // maskify: function (creditcardNumber) {

  //const maskedNumber = creditcardNumber.slice(0, -4).replace(/./g, "#"); //metodo slice para tomar solo una parte del indice. /g es un modificador global (regular exp) se combina con replace
  //return maskedNumber += numberCard.slice(-4) //-4 porque es de atras para adelante
};

export default validator;
