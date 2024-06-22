
 //funçao para buscar o texto dentro do artigo
 function buscarTexto() {
    let termo = document.querySelector('#termo').value
    const articles = document.querySelectorAll('article'); // Seleciona todos os elementos <article>

    //ForEach em portugues Para Cada (artigo)
    articles.forEach((article) => {
        //Aqui vamos coverter todo o texto em minusculo para nao ter diferença entre a escrita
        const texto = article.textContent.toLowerCase(); // Obtém o texto do <article> em minúsculas

        //IF em pt SE - se o texto incluir o termo buscado
        if (texto.includes(termo.toLowerCase())) {

            article.style.display = 'block'; //Exibir o artigo
        }
        //Else em pt Se Não - se nao encontrar 
        else {
            article.style.display = 'none'; //escondemos o artigo
        }
    });
}


//funçao para exibir todos os artigos novamente
function limparFiltroDePesquisa() {
    const articles = document.querySelectorAll('article'); // Seleciona todos os elementos <article>
    document.querySelector('#termo').value = ''
    //ForEach em portugues Para Cada (artigo)
    articles.forEach((article) => {

        //Mudar o estilo do display para block
        article.style.display = 'block'
    });

}




// Seletor das cortinas
const cortinaE = document.getElementById('cortinasE');
const cortinaD = document.getElementById('cortinasD');

// Função para deslizar a cortina para a esquerda
function deslizarEsquerda(elemento) {
  elemento.style.left = '-100%';
}

// Função para deslizar a cortina para a direita
function deslizarDireita(elemento) {
  elemento.style.right = '-100%';
}

// Iniciar o deslize após 7 segundos
setTimeout(() => {
  deslizarEsquerda(cortinaE);
  deslizarDireita(cortinaD);
}, 700);
