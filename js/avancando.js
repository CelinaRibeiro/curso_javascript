//Avançando em Javascript

//Manipulaçao de array 
const frutas = ['Uva', "Melão", "Banana"];

frutas.unshift('Manga'); //adiciona no começo 
frutas.push('Laranja'); //adiciona no final
console.log(frutas);

frutas.shift(); //remove no inicio
console.log(frutas);

frutas.pop(); //remove no final
console.log(frutas);

//map, filter, reduce -> arrow function
const numeros = [1, 2, 3, 4, 5, 6];

//find => retorna o primeiro elemento do critério
//const numeros = [1, 2, 3, 4, 5, 6];
const numeroPar = numeros.find((num) => num % 2 === 0);
console.log(numeroPar);

//filter => retorna todos os elementos que batem com o critério
const numerosPares = numeros.filter((num) => num % 2 === 0);
console.log(numerosPares);

//Manipulaçao de strings
const frase = " Olá mundo!   ";
const palavras = frase.trim();  //trim remove o espaço
console.log(palavras);

const frase2 = "JavaScript é incrível!";
console.log(frase2.startsWith("Java"));  //startsWith reconhece a palavra no início aponta como true
console.log(frase2.endsWith("!")); //endsWith reconhece a palavra no final aponta como true


//Exceções e tratamentos de erros
const idade = 15;

// if(idade < 18) {
//   throw new Error("Precisa ter ao menos 18 anos de idade!");
// }

try {
  const idade = 15;

  if(idade < 18) {
    throw new Error("Precisa ter ao menos 18 anos de idade!");
  }
  
} catch (error) {
  console.log(error);
}

console.log('Continuando o programa');


//Callback => funçao
function comprimentar(nome, callback) {
  console.log("Olá, " + nome);
  callback();
}

function mostrarSaudacao(){
  console.log("Como está?");
}

comprimentar("Maria", mostrarSaudacao);


//Callback aqui tbm
comprimentar("Maria", function(){
  console.log("Tudo bem?");
});


//settimeout => dps um tempo exeuta algo, uma vez 
function mostrarMensagem(){
  console.log('Essa msg será exibida em 3 min.');
}

//1000ms = 1s
setTimeout(mostrarMensagem, 3000);

//outra meio de usar 
setTimeout(function(){
  console.log('oi');
}, 3000);


//Promises
const promessa = new Promise((resolve, reject) => {
  const condicao = true;

  if(condicao){
    resolve('Verdadeira');
  } else {
    reject('Falsa');
  }
});

promessa.then((mensagem) => {
  console.log(mensagem);
})
.catch((err) => {
  console.log(err);
});


//Bibliotecas feitas que são "promise based"

const promesa1 = Promise.resolve(3);
const promesa2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2500, "testando");
});

Promise.all([promesa1, promesa2]).then((valores) => console.log(valores));


//Async Await
async function obterValor() {
  const promessa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Valor obtido"), 2000);
  });

  const valor = await promessa;

  console.log(valor);
}

obterValor();


//Async Await com opção obter valor com erro -- USAR ESSE NO LUGAR DE PROMISE
async function obterValorComErro() {
 try {
  const promessa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Valor com erro"), 2000);
  });

  const valor = await promessa;

  console.log(valor);

 } catch (error) {
  console.log(error);
 }
}

obterValorComErro();


//JSON (JavaScript Object Notation)
//{nome: "Maria"} - Objeto em js 
//{"nome": "Maria"} - JSON
//Padroniza a comunicação 
//front-end e back-end em uma só linguagem 

const objeto = { nome: "João", idade: 30  };  //objeto

//transformando objeto em json 
const jsonString = JSON.stringify(objeto);

console.log(jsonString);
console.log(typeof jsonString);

// ------
//jSON
const json = '{ "nome": "Maria", "idade": 20 }';

//transformando json em objeto
const objeto2 = JSON.parse(json);

console.log(objeto2);
console.log(typeof objeto2);


