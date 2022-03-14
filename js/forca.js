let numeroTentativas = 6;
let palavraSecretaDica;
let palavraSecretaSorteada;
let listaTracinhos = [];


const palavras = [
    palavra1= {
        nome : 'CAMELO',
        dica : 'ANIMAL',
    },
    palavra2= {
        nome : 'ARARA',
        dica : 'PÁSSARO',
    },
    palavra3= {
        nome : 'BACALHAU',
        dica : 'PEIXE',
    },
    palavra4= {
        nome : 'FEIJOADA',
        dica : 'COMIDA',
    },
    palavra5= {
        nome : 'MAGENTA',
        dica : 'COR',
    },
    palavra6= {
        nome : 'LEOPARDO',
        dica : 'ANIMAL',
    },
    palavra7= {
        nome : 'CALOPSITA',
        dica : 'PÁSSARO',
    },
    palavra8= {
        nome : 'PERNAMBUCO',
        dica : 'ESTADOS',
    },
    palavra9= {
        nome : 'ESPAGUETE',
        dica : 'PRATOS',
    },
    palavra10= {
        nome : 'ESPORTE',
        dica : 'TIME DE FUTEBOL',
    }
];

gerarPalavraAleatoria();
function gerarPalavraAleatoria(){
    const palavraAleatoria = parseInt(Math.random()* palavras.length)
   
    palavraSecretaSorteada = palavras[palavraAleatoria].nome;
    palavraSecretaDica = palavras[palavraAleatoria].dica;
    console.log(palavraSecretaSorteada);
    console.log(palavraSecretaDica);
}
mostrarPalavraNaTela();
function mostrarPalavraNaTela(){
    const dica = document.getElementById("dica-palavra"); // pega o elemento por seu id
    dica.innerHTML = palavraSecretaDica;

    const palavraSecreta = document.getElementById("palavra-secreta");
    palavraSecreta.innerHTML = "";

    for(let i=0; i<palavraSecretaSorteada.length; i++){
        if(listaTracinhos[i]==undefined){
            listaTracinhos[i] = '&nbsp;' //gera espaço
            palavraSecreta.innerHTML = palavraSecreta.innerHTML+"<div class='letras'>"+ listaTracinhos[i]+"</div>"
        }
        else{
            palavraSecreta.innerHTML = palavraSecreta.innerHTML+"<div class='letras'>"+ listaTracinhos[i]+"</div>"
        }
    }
}

function LetraEscolhida(letra){
    document.getElementById('letra-' + letra).disabled = true;
        
    if(numeroTentativas>0){

        mudarEstilo('letra-' + letra);
        ComparaLetraNaLista(letra);
        mostrarPalavraNaTela();
    }
}

function mudarEstilo(letra){
    document.getElementById(letra).style.background = '#7B68EE';
    document.getElementById(letra).style.color = '#ffffff';
}
 function ComparaLetraNaLista(letra){
    const posicao = palavraSecretaSorteada.indexOf(letra); //verifica se letra existe na palavra e retorna posição
    if(posicao<0){
        numeroTentativas--
        montaBonequinhoErro();
    
        if(numeroTentativas==0){

            iniciaModal("Que pena", "não foi dessa vez,... a palavra era   <br>" +palavraSecretaSorteada);
        
        }
       
       

    }else{
        for(let i=0;i<palavraSecretaSorteada.length;i++){
            if(palavraSecretaSorteada[i] == letra){
                listaTracinhos[i]= letra;
            }
        }
    }
    let vitoria = true;
    for(let i=0;i<palavraSecretaSorteada.length;i++){
        if(palavraSecretaSorteada[i] != listaTracinhos[i]){
            vitoria= false;
        }
    }

    if(vitoria==true){
        //mensagem vitória;
        iniciaModal("Obaa", "Você acertou, a palavra era mesmo <br> " + palavraSecretaSorteada)
        numeroTentativas=0;
    }
}
function montaBonequinhoErro(){
    switch(numeroTentativas){
        case 5:
            document.getElementById('imagem').style.background = "url('./img/forca01.png')";
            break;
        
        case 4:
            document.getElementById('imagem').style.background = "url('./img/forca02.png')";
            break;
        
        case 3:
            document.getElementById('imagem').style.background = "url('./img/forca03.png')";
            break;
        
        case 2:
            document.getElementById('imagem').style.background = "url('./img/forca04.png')";
            break;
        
        case 1:
            document.getElementById('imagem').style.background = "url('./img/forca05.png')";
            break;
        
        case 0:
            document.getElementById('imagem').style.background = "url('./img/forca06.png)";
            break;
        
        default:
            document.getElementById('imagem').style.background = "url('./img/forca.png)";
            break;
        
    }
}
function iniciaModal(titulo, mensagem){

    let TituloModal= document.getElementById('exampleModalLabel');
    TituloModal.innerText = titulo;

    let MensagemModal = document.getElementById('modalBody');
    MensagemModal.innerHTML= mensagem;
    $("#myModal").modal({show: true});
}

//reiniciar jogo
let reiniciar = document.getElementById('btn-reiniciar');
reiniciar.addEventListener('click', function(){
    location.reload();
});










