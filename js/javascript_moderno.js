// ES6 + = Versão do Javascript
//let e const
//let pode alterar valor
let n = 10;
n = 20;

//const não pode alterar valor
const x = 15;


function testeVar() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x);
  } 
    console.log(x);
}

function testeLet() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x);
  } 
    console.log(x);
}

testeVar();
testeLet();


//Arrow function
//arrow function exemplo1
const soma = (a, b) => a + b;

console.log(soma(3, 5));


// ---
//arrow function exemplo2
const quadrado = (n1) => n1 * n1;

console.log(quadrado(2));

//arrow function exemplo3
const multiplicacao = (m1, m2) => m1 * m2;
console.log(multiplicacao(4, 5));

//arrow function exemplo4
const cumprimento = (nome) => {
  const mensagem = `Olá, ${nome}`;
  return mensagem;
}

console.log(cumprimento("Paula"));

//Template literals
const nome = "Maria";
const idade = 25;

console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`);


//Destructuring -> desestruturaçao
const pessoa = {nome: "João", idade: 40};

const {nome: nome2, idade: idade2} = pessoa;

console.log(pessoa);


//spread operator => espalhamento
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];

console.log(array2);


//default parameters
function saudacao(nome = "Mara") {
  console.log(`Olá ${nome}`);
}

saudacao();

saudacao("Fulano");
console.log(`Olá ${nome}`);

//Object literals enhancements
//{nome: "Pedro"}

const nomeNovo = "Jose";
const idadeNova = 34;

const pessoaNova = { nomeNovo, idadeNova };

console.log(pessoaNova);

//------
const saudacaoObject = {
  dizerOi() {
    console.log('Oi');
  },
};

saudacaoObject.dizerOi();


//Classes e heranças
class Pessoa {
  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
  }
}

const p = new Pessoa("Joana", 66);

console.log(p);


//.......
class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }
}

const p2 = new Funcionario("Mario", 35, 2000);
console.log(p2);

