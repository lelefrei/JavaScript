// Mini Projeto 1

//Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
//Divisivel por 3 e 5 => FizzBuzz
// Não divisivel por 3 ou 5 => entrada
//Não é um numero=> 'Não é um número'
//const resultado = fizzBuzz(15);
//console.log(resultado);
//function fizzBuzz (entrada){ 
//if (typeof entrada !== 'number')
//return 'Não é um número';
//if (entrada % 3 === 0 && entrada % 5 ===0)
//return 'FizzBuzz';
//if (entrada % 3 === 0)
//return 'Fizz';
//if(entrada % 5 ===0)
//return 'Buzz';
//return entrada;
//}

//Mini Projeto 2

//Velocidade máxima de 70
// a cada 5km acima do limite você ganha 1 ponto
//Math.Floor()
// caso pontos maior que 12 -> "Carteira Suspendida"
//verificarVelocidade(84);
//function verificarVelocidade(velocidade) {
//const velocidadeMaxima = 70;
//const KmPorPonto=5;
//if (velocidade <= velocidadeMaxima)
//console.log('ok');
//else {
//const pontos = Math.floor (((velocidade - velocidadeMaxima)/KmPorPonto));
//if(pontos >=12)
//console.log('Carteira Suspensa');
//else
//console.log('Pontos',pontos);
//}
//}