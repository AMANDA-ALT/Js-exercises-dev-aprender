// Velocidade maxima de até 70 km
// a cada 5 km acima ganha um ponto na carteira
// Usar a funcao Math.Floor()
// caso pontos maior que 12 => Carteira Suspensa

checkSpeed(130);

function checkSpeed(speed) {
  const maxSpeed = 70;
  const kmPerPoint = 5;
  if (speed <= maxSpeed)
    console.log('Good job, you are in the correct speed limit');
  else {
    const points = Math.floor(((speed - maxSpeed) / kmPerPoint));
    if (points >= 12)
      console.log('Drive License Suspended');
    else
      console.log('pontos', points);
  }

}

