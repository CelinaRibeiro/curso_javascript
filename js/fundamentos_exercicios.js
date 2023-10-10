//Exercícios de fundamentos
// Exercício 1: Olá, Mundo!
// Crie um script JavaScript que imprima "Olá, Mundo!" no console.
console.log("Olá, mundo!"); 


// Exercício 2: Conversão de Tipos
// Dado o valor de uma string "1234", converta-o em um número e exiba o tipo da variável no console.
let n1 = "1234";
let n2 = Number(n1);
console.log(typeof n2);

// Exercício 3: Manipulação de Strings
// Dado uma string "JavaScript é incrível", escreva um código que conte quantos caracteres a string tem e quantas palavras existem na frase.
const frase = "JavaScript é incrível";
const numeroDeCaracteres = frase.length; //conte quantos caracteres
const numeroDePalavras = frase.split(" ").length;  //quantas palavras existem na frase.

console.log(`O número de caracteres é ${numeroDeCaracteres}`); 
console.log(`O número de palavras é ${numeroDePalavras}`); 

// Exercício 4: Loops e Arrays
// Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console.
const mercado = ['arroz', 'feijão', 'óleo', 'açúcar', 'macarrão'];

for(i = 0; i < mercado.length; i++) {
  console.log(mercado[i]);
}


// Exercício 5: Funções, Strings e Math
// Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, "14:30"). 
//A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30 PM"). 
//Use o objeto Math para auxiliar nesta conversão. 
//Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.
function converterHorario(horario24) {
  const [hora, minuto] = horario24.split(":");
  let hora12 = hora % 12 || 12;
  const periodo = hora < 12 ? "AM" : "PM";
  return `${hora12}:${minuto} ${periodo}`;
}

console.log(converterHorario("14:30")); // "2:30 PM"
console.log(converterHorario("00:00")); // "12:00 AM"
console.log(converterHorario("12:00")); // "12:00 PM"