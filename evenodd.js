// Receber uma quantidade de valores para avaliar
//funçao  exibe se cada valor é par ou impar

exibirParImpar(20);

function exibirParImpar(limite) {
  for (let i = 0; i <= limite; i++) {
    if (i % 2 === 0)
      console.log(i, 'Par');
    else {
      console.log(i, 'Impar');
    }
  }
}