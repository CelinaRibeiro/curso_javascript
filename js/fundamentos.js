//Fundamentos
//var nome = "valor";
var minhaVariavel = "Olá mundo!";

console.log(minhaVariavel);


//variáveis e tipos de dados
var meuNumero = 10;
console.log(meuNumero + 5);
console.log(typeof meuNumero);

var booleano = false;  //ou true
console.log(typeof booleano);

var meuObjeto = {}; //objeto
var meuArray = [];  //array
var meuNull = null;
var meuUndefined = undefined;


//let e const
//novas formas de declarar variáveis
let x = 10;  //qdo a variavel precisa mudar o valor
const y = 20;  //const algo que não muda no código
console.log(x, y);

//operadores aritméticos
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

//operadores de comparaçao
console.log(x == y);
console.log(x != y);

console.log("5" == 5);  //nao da resultado preciso
console.log("5" === 5);  //usar
console.log("5" !== 5); //usar

//operadores lógicos
//AND &&
//OR ||
console.log(10 > 5 && 20 > 5); //os dois tem q satisfazer a condição p ser true
console.log(10 > 5 && 20 < 5); //os dois tem q satisfazer a condição p ser true

console.log(10 > 5 || 20 > 5);   //um ou outro tem q satisfazer a condição p ser true
console.log(10 > 5 || 20 < 5);   //um ou outro tem q satisfazer a condição p ser true

//conversão de tipos
const meuMumero2 = "1234";
const meuNumeroConvertido = Number(meuMumero2);
console.log(meuMumero2);
console.log(typeof meuNumeroConvertido);

//Estrutura de condiçao - if, else e if else
const idade = 20;
if(idade >= 18) {
  console.log('Você é maior de idade' + ' ' + idade);
} else {
  console.log('Você não é maior de idade');
}


//switch 
//const fruta = '';
const fruta = 'Morango';

switch (fruta) {
  case "Banana":
    console.log('A fruta é: ' + fruta);
    break;
  case "Uva":
    console.log('A fruta é: ' + fruta);
    break;
  case "Morango":
    console.log('A fruta é: ' + fruta);
    break;
  default:
    console.log("Nenhuma fruta escolhida")
}
 


//Estruturas de repetiçao
//1, 2, 3, 4, 5, 6, 7, 8, 9 ... => dependendo da condiçao

//contador, condição de limite, incremento
for(let i = 0; i <= 10; i++) {
  console.log("O valor de i é: " + i);
}

//while
let a = 0;
while(a < 5) {
  a++;
  console.log(a);
}


//funções
//function nome(arg1, arg2) { corpo }
//---- funçao 1
function comprimentar(){
  console.log("Olá");
}

//invocação = nome();
comprimentar();  //executa a função criada


//---- funçao 2
function comprimentar2(nome){
  console.log("Olá " + nome);
}

comprimentar2('Mara'); //executa a função criada


//escopo de variáveis
let cor = "azul";  //variavel global

function mostrarCores(cor){
  let idade = 20; //variavel local
  console.log(cor, idade);
}

mostrarCores(cor);


//hoisting = içamento
testeHoisting();

function testeHoisting(){
  console.log("Deu certo");
}


//arrow function
const testeArrow = () => console.log("Esta também é uma função!");

testeArrow();


//truthy e falsy
const v1 = ""; //falsy
const v2 = "Teste de variável";

if (v1) {
  console.log('Verdadeiro');
} else { 
  console.log('Falso');
}


//array lista
const numeros = [1, 2, 3, 4, 5, 6, 7];

document.write(numeros);
console.log(numeros[0]);

//push adiciona elemento no array
numeros.push(8);
console.log(numeros);

//prototype => OBJETO ->objeto 2
//Array => nossos arrays

//pop retira o último elemento do array
numeros.pop();
console.log(numeros);


//strings 
const minhaStringNova = "Olá mundo!";

//concatenação = +
const minhaString3 = minhaStringNova + " Como você está?";

console.log(minhaString3);

//interpolação 
const minhaString4 = `${minhaStringNova} tudo bem?`;
console.log(minhaString4);
console.log(minhaString4.length);
console.log(minhaString4[0]);
console.log(minhaString4.toUpperCase);

//Data e hora
const horaAtual = Date();
console.log(horaAtual);

const natal = new Date(2023, 11, 25); //mês começa contar do 0 tbm
console.log(natal);

//Match - propriedade matemática
console.log(Math.PI);
console.log(Math.round(3.8));  //arredonda numero
console.log(Math.sqrt(16));  //raiz quadrada
console.log(Math.pow(2, 3));

