# Proyecto Tarjeta de crédito válida

## Índice

- [Proyecto Tarjeta de crédito válida](#proyecto-tarjeta-de-crédito-válida)
  - [Índice](#índice)
  - [1. Preámbulo](#1-preámbulo)
  - [2. Resumen del desarrollo del proyecto](#2-resumen-del-desarrollo-del-proyecto)
  - [3. Estructura del proyecto](#3-estructura-del-proyecto)

***

## 1. Preámbulo

Este proyecto fue creado como la última etapa del proceso de pago para los cursos LABORATORIA, que involucra un carrito de compras. La aplicación web desarrollada tiene como objetivo validar el número de tarjeta ingresado por el usuario, y para ello se implementó el algoritmo de Luhn.

El algoritmo de Luhn se basa en la suma de cada uno de los dígitos del número de crédito, comenzando por el último dígito (reverse) y avanzando hacia la izquierda. Los dígitos en posiciones pares (contando desde la derecha) se multiplican por 2 y, si el resultado de esta multiplicación es mayor que 9, se suman los dígitos individuales de ese número. Luego, se suman todos los dígitos y el resultado final debe ser divisible por 10 para que el número sea considerado válido.

Finalmente, el usuario debe hacer clic en el botón "Validar", lo que activará la función que verifica si el tipo de tarjeta es válido o no. Si la tarjeta es válida, se mostrará al usuario el siguiente mensaje en letras verdes: "Es válido", junto con el número de tarjeta ingresado, pero ocultando los primeros 12 dígitos y mostrando los últimos 4 dígitos. En caso contrario, aparecerá un mensaje en letras rojas que indicará "No es válida".

## 2. Resumen del desarrollo del proyecto
Este proyecto, se ideó en base a este orden:

* Lo primero fue, entender muy bien lo que se requería y el algoritmo de Luhn.
  ![ algoritmo de Luhn](/src/img/algoritmo.png)
  
* Luego se creo un prototipo de alta fidelidad en  _figma_.
  ![ figma](/src/img/figma.png)

* Para empezar con JS. lo primero fue escribir seudocódigo, ya que era más facil de entender lo que necesitaba hacer.
  
* Codear.

* Hacer las pruebas unitarias requeridas de los métodos usados.
  ![ unitarias](/src/img/unitarias.png)
  
* Desplegar en gitHub Page.
  ![ despliegue](/src/img/despliegue.png)


## 3. Estructura del proyecto
```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── validator.js
│   ├── index.html
│   ├── index.js
│   └── style.css
│   └── img
└── test
    ├── .eslintrc
    └── validator.spec.js
```