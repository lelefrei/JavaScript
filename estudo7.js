//Operadores Aritméticos(matemáticos)
//Operadores Atribuição
//Operadores de Comparação
//Operadores lógicos
//Operadores Bitwise

//Operadores Lógicos
// Tomar decisões baseadas em operações multiplas

//Operador Lógico e (&&)
//Retorna TRUE se os dois operandos forem true
// (Exemplos )

//console.log(true && true);
//console.log(false && true);

//let maiorDeIdade = true;
//possuiCarteiraDeTrabalho = true;
//let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
//console.log(podeAplicar);

//Operador Lógico ou (||)
//Retornar true se um dos operandos forem true
// (Exemplos)
//let maiorDeIdade = false;
//possuiCarteiraDeTrabalho = true;
//let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
//console.log(podeAplicar);

//Operador NOT(!)
let maiorDeIdade = false;
 let possuiCarteiraDeTrabalho = true;
 let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
 console.log(podeAplicar);
console.log('pode aplicar: ',podeAplicar);
let candidatoRecusado= !podeAplicar;
console.log('Candidato Recusado',candidatoRecusado);

//Compações não boleanos

//False, underfined, null, 0 , false,'',NaN - not a number, Truthy(precisa de um true para retornar a TRUE)
// false || 1 || 8 , retorna a 1 ,pois os operadores logicos "||" vai retornar a primeira e ignorar tudo o que vem depois a essa comparação

// let corPersonalizada = 'Vermelho';
// let corPadrao ='Azul';
// let corPerfil = corPersonalizada ||corPadrao;
// console.log(corPerfil);

