//DOM - Document Object Model 

// SELEÇÃO POR ID
//selecionar elementos - getElementById é mais antigo 
const elementPorId = document.getElementById('meuId');
console.log(elementPorId);

//selecionar elementos - é mais moderno usando o querySelector 
const elementPorId2 = document.querySelector('#meuId');
console.log(elementPorId2);


//SELEÇÃO POR CLASSES
//selecionar elementos - getElementsByClassName é mais antigo 
const elementPorClasse = document.getElementsByClassName('minhaClasse');
console.log(elementPorClasse);

//selecionar elementos - é mais moderno usando o querySelector 
const elementPorClasse2 = document.querySelector('.minhaClasse');
console.log(elementPorClasse2);


//Manipular conteúdo do texto
const element = document.querySelector("#meuId");
//console.log(element.textContent);

element.textContent = 'Mudei de texto';

//adicionando tempo
setTimeout(() => {
  element.textContent = 'Mudei de texto2';
}, 1000);


//trabalhando com aributos 
const link = document.querySelector("a");
console.log(link);

link.setAttribute('href', 'https://delivery.nucleosti.com.br/public/');

console.log(link.getAttribute('href'));

console.log(link.hasAttribute('target'));

link.removeAttribute('target');


//Manipulaçao de classes do CSS
const elemento = document.querySelector('#meuId');
element.classList.add('novaClasse');

element.classList.remove('novaClasse');

element.classList.toggle("outraClasse");  //toggle se tiver o elemento ele retira, se não tiver o elemento ele coloca

//Manipulando o CSS
const elemento3 = document.querySelector('#meuId');
elemento3.style.weight = "bold";
elemento3.style.backgroundColor = 'yellow';

//Navegaçao entre nós
const elemento4 = document.querySelector('#meuInput');

const pai = elemento4.parentNode;

console.log(pai);

//Obter o primeiro filho
const primeiroFilho = pai.firstChild;
console.log(primeiroFilho);

const ultimoFilho = pai.lastChild;
console.log(ultimoFilho);


//Manipulação de estrutura DOM 
const novoElemento = document.createElement('div');
console.log(novoElemento);

novoElemento.textContent("Minha div JS");
console.log(novoElemento);


//Eventos
//click 
const botao = document.querySelector("button");

botao.addEventListener('click', function () {
  console.log('Clicou no botão');
});


//mouse
const elemento5 = document.querySelector('#meuFormulario');

elemento5.addEventListener('mouseover', function () {
  console.log('Passou o mouse');
});


//teclado de
const campoImput = document.querySelector('#meuInput');

campoImput.addEventListener('keydown', function () {
  console.log('Tecla pressionada');
});


//formulário 
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  console.log('Form enviado');

});


//propagação de eventos 
document.querySelector('#elementoPai').addEventListener('click', function (event) {
  console.log('Clique capturado do pai');
})


