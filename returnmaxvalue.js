// eslint-disable-next-line max-len
/* First mini project - máximo entre 2 valores: Escreva uma função que usa 2 números e retorna o maior entre eles */

let maxValue = max(5,9);
console.log(maxValue);

function max(num1, num2) {
if(num1 > num2)
    return num1;
else 
    return num2;
}

// will log 9 in this case

/*Usando operador ternário:

let maxValue = max(45,67);
console.log(maxValue);

function max(num1, num2) {
   return num1 > num2 ? num1 : num2;
}*/

