const validator = {
  //FUNCION IS VALID:tome el numero lo dividi y reverse y se guardó en una variale vacia
  isValid: function (creditcardNumber) {
    const numberCardR = creditcardNumber.split("").reverse();
    let resultadoFinal = "";
//hacemos un recorrido por todo con foreach (tiene parametros que entrega valor e indice)
    numberCardR.forEach((value, index) => {
      if (index % 2 === 0) {
        resultadoFinal += value;
      } else {
        const multiplicacion = value * 2; //se multiplica x2 como dice el algoritmo

        if (multiplicacion <= 9) {
          resultadoFinal += multiplicacion;
        } else {
          const nuevo = multiplicacion.toString().split("");
          resultadoFinal += parseInt(nuevo[0]) + parseInt(nuevo[1]); //pasamo a numero toma la cadena y devuelve un entero
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


  // maski
  maskify: function (creditcardNumber) {
    const primeMask = creditcardNumber.slice(0, -4).replace(/./g, "#"); //tomamos una pieza con slice (tiene parametros incio y fin) -4 por que son los finales y usamos regex expresionees regulares
    const ultiNoMask = creditcardNumber.slice(-4);
    return primeMask + ultiNoMask; // se retorna la primera parte del numero(enmascarado) mas los ultimos
  },
};

export default validator;
