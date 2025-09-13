//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let input = document.getElementById('amigo');
    let nome = input.value.trim();
    //trim elimina os espaços em branco nos valores digitados
    let lista = document.getElementById('listaAmigos');
   
    if (nome === ''){
        alert('Digite um nome antes de adicionar');
        return;
    }
    if(amigos.includes(nome)){
        alert('Esse nome foi adicionado');
        //includes verifica se um valor está presente dentro de uma string ou array. Sendo true or false

    }
    amigos.push(nome);
    //push adiciona o valor da variável nome ao final do array amigos

    let li = document.createElement('li');
    //li lista os nomes um abaixo do outro
    //createElement criar um novo elemento HTML via código, sem precisar escrever a tag diretamente no HTML
    li.textContent = nome;
    lista.appendChild(li);

    input.value = '';

}

function sortearAmigo(){
    let resultado = document.getElementById('resultado');
    if (amigos.length < 2){
        alert('Adicione pelo menos 2 amigos para sortear');
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    //Math.floor arredonda para baixo
    let sorteado = amigos[indice];

    resultado.innerHTML = (`O amigo secreto sorteado é:  ${sorteado}`)
   
}

