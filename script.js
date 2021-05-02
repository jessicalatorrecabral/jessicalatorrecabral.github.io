let canvas
let ctx
let playing = true
let x  
let intervalo  


window.onload = function(){ //depois que carregar a pagina
    
        canvas = document.getElementById("canvas") //pegando o id canvas
    ctx = canvas.getContext("2d") // pegando o context passando o 2d como argumento. é onde criamos a parte grafica do jogo
    document.addEventListener("keydown", keyDownEvent)
     //sempre que uma tecla for pressionada
     x = 8
    setInterval(redesenharJogo, 1000 / x)

    
     //define um intervalo para uma function ser chamada. a cada 1000 milesgundos por 8
}
//Tela do jogo

let tamanhoDaTela = tamanhoCaminho = 20
let eixoX = eixoY = 0 //velocidade da cobra

//definir propriedades da cobra

let tamanhoInicial = 3
let tamanhoCauda = tamanhoInicial
let caminhoDaCobra = [] //extamente isso, o caminho da cobra
let cobraEixoX = cobraEixoY = 10 //ponto de inicio da cobra

// definindo a comidinha

let comidinhaX = (comidinhaY = 15) //posição inicial da comidinha




function redesenharJogo(){

    if(playing === true){

   
    

    
        
    cobraEixoX += eixoX
    cobraEixoY += eixoY
    
        if(cobraEixoX < 0){
            cobraEixoX = tamanhoDaTela - 1 // se ela ir pra um lado ...
    
        }
        if(cobraEixoX > tamanhoDaTela - 1){ //...pode sair do outro lado na tela
            cobraEixoX = 0
        }
        if(cobraEixoY < 0){
            cobraEixoY = tamanhoDaTela - 1// se ela ir pra cima....
        }
        if(cobraEixoY > tamanhoDaTela - 1){ // ....ela volta por baixo
            cobraEixoY = 0
        }

    
        
    
    
        if (cobraEixoX == comidinhaX && cobraEixoY == comidinhaY){ //aumenta um quadradinho na cauda
            tamanhoCauda++
            comidinhaX = Math.floor(Math.random() * tamanhoDaTela); //redefine a posição da comida, randomicamente, posições aleatorias no tabuleiro. o y é igual :D
            comidinhaY = Math.floor(Math.random() * tamanhoDaTela);
            }

    
        


    
    // onde a cobra passa (telA)
    ctx.fillStyle = '#000' //define a cor do preenchimento do retangulo. Sempre que a cobra andar, ele vai pintar
        ctx.fillRect(0, 0, canvas.width, canvas.height) //define a posição do retangulo. Desenha um retangulo preenchido na posição x,y. Aqui ele vai pintar o retangulo, no caso a tela onde a cobra vai andar

    //cobra
    
        ctx.fillStyle = '#3b3'
        for(let i = 0; i < caminhoDaCobra.length; i++){
            ctx.fillRect(
                caminhoDaCobra[i].x * tamanhoCaminho, //o caminho da posição [i] no eixo x e no eixo y e preenche.
                caminhoDaCobra[i].y * tamanhoCaminho,
                tamanhoCaminho -1,
                tamanhoCaminho -1
            )
            if (caminhoDaCobra[i].x == cobraEixoX && caminhoDaCobra[i].y == cobraEixoY){ //verifica se a cobra encosta nela mesma
                tamanhoCauda = tamanhoInicial
                
                }
            }

    


    ctx.fillStyle = '#c11'
    ctx.fillRect(comidinhaX * tamanhoCaminho, comidinhaY * tamanhoCaminho, tamanhoCaminho, tamanhoCaminho)
    // na linha de cima, estou multiplicando 15 por 20, já definidos anteriormente, para definiar a posição que vamos pintar (o quadradinho).15 * o numero de pixels que o caminho tem(tamanhoCaminho).
    //os outros 2 parametros são as peças(pixels) que vai ser preenchido.
           // if(playMode){ quase deu bom haha
                caminhoDaCobra.push({ // armazenando o rastro da cobra em um objeto
                    x:cobraEixoX,
                    y:cobraEixoY
                })
            

    
 
   
    
            }
           
      
    
        while (caminhoDaCobra.length > tamanhoCauda){ // verifica se o tamanho do rastro é maoior que a cauda (cumprimento da cobra)
            caminhoDaCobra.shift()
                }

    }

    
    
    

    
    


    
function keyDownEvent(event){ //dispara um evento, ao pressionar as setas do teclado. Esses numeros são o code que representam teclas fisicas do teclado.
    
        switch(event.keyCode){
            case 37: //esquerda
                eixoX = -1;
                eixoY = 0;
                break;
            case 38: //pra cima
                eixoX = 0;
                eixoY = -1;
                break;
            case 39: // direita
                eixoX = 1;
                eixoY = 0;
                break;
            case 40: // pra baixo
                eixoX = 0;
                eixoY = 1;
                break;
        }

    
}

document.addEventListener("keydown", keyPressEventO)
function keyPressEventO(event){
    if(event.keyCode == 32){
      playing = false
    } else {
        playing = true
    } 
//Depois de todos os bugs possiveis e imagináveis, consegui fazer uma feature de pause. Isso MESMO, 4 LINHAS DE CÓDIGO APENAS, me causaram dores de cabeça hehe
    
   
}


document.addEventListener("keydown", keyPressEvent)
function keyPressEvent(event){ //quando pressionar a tecla enter, o jogo recomeça

    if(event.keyCode == 13){
        cobraEixoX = cobraEixoY = 10 //ponto de inicio da cobra
    comidinhaX = (comidinhaY = 15) //posição inicial da comidinha
    tamanhoDaTela = tamanhoCaminho = 20
    eixoX = eixoY = 0 //velocidade da cobra


    
    }
    

    


}



