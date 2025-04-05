var catalogo = document.querySelector("#catalogo");
document.addEventListener("keyup", (e) => {
    if (e.key == 'Escape') {
        document.querySelector('#popup').style.display = 'none';
        document.activeElement.blur();
    }
    
}
);

// criando função do menu de hamburger
var mh = document.querySelector('#menu-hamburger');
var barra1 = document.querySelector('#barra1');
var barra2 = document.querySelector('#barra2');
var barra3 = document.querySelector('#barra3');
var mi = document.querySelector('#menu-itens');

mh.onclick = () => acaoMenuHamburger ()


function acaoMenuHamburger () {
    if (document.querySelector('#fctxtmh').style.display == 'none') {
        document.querySelector('#fctxtmh').style.display = 'flex';
    } else {
        document.querySelector('#fctxtmh').style.display = 'none'
    }
    
    mh.classList.toggle('aberto');
    mi.classList.toggle('aberto');
    mh.focus()
        
}




const mc = document.querySelector("#mc");


class Cartao {
    
    id
    titulo
    imagem
    descImagem
    descricao
    linkBotao
 

}

function criarCartao (Cartao) {
    var novoCartao = document.createElement("button"); 
    novoCartao.id = Cartao.id;
    novoCartao.className = 'cartao';
    var imagemCartao = document.createElement("img");
    imagemCartao.src = Cartao.imagem;
    imagemCartao.alt = Cartao.descImagem;
    imagemCartao.className = 'imagem-de-cartao';
    novoCartao.append(imagemCartao);
    var textoCartao = document.createElement('label');
    textoCartao.innerText = Cartao.titulo;
    textoCartao.className = 'texto-de-cartao';
    novoCartao.appendChild(textoCartao);
    novoCartao.onclick = () => abrirpopup (Cartao.titulo, Cartao.imagem, Cartao.descImagem, Cartao.descricao, Cartao.linkBotao) ;
    catalogo.appendChild(novoCartao);
    
    
}

function abrirpopup (titulo, imagem, descImagem, descricao, linkBotao) {
    document.querySelector("#popup").style.display = "flex"
    document.getElementById("titulo-conteudo-popup").innerText = titulo;
    document.getElementById("imagem-conteudo-popup").src = imagem;
    document.getElementById("imagem-conteudo-popup").alt = descImagem;
    document.getElementById("descricao-conteudo-popup").innerText = descricao;
    document.getElementById("botao-conteudo-popup").onclick = () => window.open(linkBotao, '_blank');
    document.querySelector('#botaofechar').focus();
   
 }

function fecharpopup () {
    document.querySelector('#popup').style.display = 'none';
    
}

function criarCartaoEmBreve (titulo, imagem, descImagem) {
    let novoCartaoEmBreve = document.createElement('button');
    novoCartaoEmBreve.className = 'cartao-em-breve';
    let tarja = document.createElement('div');
    tarja.className = 'tarja';
    tarja.innerText = 'Em Breve... ';
    let imagemCa = document.createElement('img');
    imagemCa.className = 'imagem-de-cartao';
    imagemCa.src = imagem;
    imagemCa.alt = descImagem;
    let tituloCa = document.createElement('label');
    tituloCa.className = 'texto-de-cartao';
    tituloCa.innerText = titulo;
    novoCartaoEmBreve.append(imagemCa);
    novoCartaoEmBreve.append(tituloCa);
    novoCartaoEmBreve.append(tarja);
    catalogo.append(novoCartaoEmBreve);
}

// fechando ao clicar no trasparente do popup
document.querySelector('#fundo-invisivel').onclick = fecharpopup;

// Criando ação de fechar o popup pelo botão
const bf = document.querySelector("#botaofechar");
bf.onclick = fecharpopup;


// Criando cartão da página do catalisa em si
var pac1 = new Cartao();
pac1.id = 'pac1';
pac1.titulo = 'Gerador de currículo';
pac1.imagem = 'Imagens/curriculo.png';
pac1.descImagem = 'Demonstrações dos modelos de gerador de currículo';
pac1.descricao = 'Um projeto que gera curriculos no modelo ats, com formulário, vizualizador e gerador de PDF.';
pac1.linkBotao = 'https://gerador-de-curriculo-ats.vercel.app/';
criarCartao(pac1);

// Criando o cartão da digix melhorado
var cdm = new Cartao();
cdm.id = 'cdm';
cdm.titulo = 'Projeto Digix Melhorado';
cdm.imagem = 'Imagens/digixmelhorado.png';
cdm.descImagem = 'demonstração com cabeçalho de folder view de um repositório github.';
cdm.descricao = 'O projeto foi sugerido pela digix, consiste num sistema de sorteio de casas, cujo cliente seria o governo. \n As regras de negócio seriam por número de dependentes e por renda. \n Foi construído em java e na verdade, foi uma reconstrução com melhorias tais como: clean code, design patterns e princípios SOLID.';
cdm.linkBotao = 'https://github.com/dorzao/EstudosERevisoesJava/tree/main/CaseTecnicoDigixMelhorado'
criarCartao(cdm)

// Criando cartao do projeto catalisa
var pc = new Cartao();
pc.id = 'pc';
pc.titulo = 'Projeto Catalisa'
pc.imagem = 'Imagens/rickyandmorty.png'
pc.descImagem = 'rick e morty em uma moldura. Ricky segura um controle remoto. abaixo um botão que diz: conheça mais personagens.';
pc.descricao = '  O projeto consiste na utilização de uma API do ricky and morty, onde mostra alguns personagens e algumas informações dos mesmos. \n Criado em javascript, conta com tecnologia de sorteio e ação em tempo real.'
pc.linkBotao = 'https://github.com/dorzao/desafio_catalisa';
criarCartao(pc);

// Criando cartaão para case técnico gama academy
var ctg = new Cartao();
ctg.id = 'ctg';
ctg.imagem = 'Imagens/casetecnicogama.png'
ctg.descImagem = 'folder view de uma página do github';
ctg.titulo = 'Case Gama Academy'
ctg.descricao = ' Case técnico com alguns exercícios sugeridos, sendo o sexto um mini sistema de votação. \n O projeto foi criado em java, na ide do Eclipse, e contempra a possibilidade e adição de novos candidatos a votar, mostra número de votos, porcentagem, por candidato e também até os dados referente aos votos nulos. '
ctg.linkBotao = 'https://github.com/dorzao/EstudosERevisoesJava/tree/main/CasosDeUsoGama';
criarCartao(ctg);

// Criando cartão da página do catalisa em si
var pac = new Cartao();
pac.id = 'pac';
pac.titulo = 'Página catalisa';
pac.imagem = 'Imagens/paginacatalisa.png';
pac.descImagem = 'Ricky com uma espressão sarcástica.';
pac.descricao = 'Aqui é basicamente o projeto do catalisa rodando. Funcionamento do sorteio e descrição de personagens na prática';
pac.linkBotao = 'https://dorzao.github.io/desafio_catalisa/';
criarCartao(pac);

criarCartaoEmBreve('web-pizzaria em construção', 'Imagens/pizza.png', 'pizza de peperon com muitos temperos');

