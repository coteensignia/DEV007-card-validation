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

  maskify: function (creditcardNumber) {
    const primeMask = creditcardNumber.slice(0, -4).replace(/./g, "#");
    const ultiNoMask = creditcardNumber.slice(-4);
    return primeMask + ultiNoMask;
  },
};

export default validator;
