const player1 = "x, player 1";
const player2 = "O , player 2";
var playTime = player1;
var gameOver = false;
var player = {}

function refreshPlayer(){
    if(gameOver){
        return
    }

    if(playTime == player1){
        player = document.querySelectorAll("div#playerTurn img")[0];
        player.setAttribute("src","img/x.jpg")

    } else{
        player = document.querySelectorAll("div#playerTurn img")[0];
        player.setAttribute("src","img/bola.jpg");
    }
}

function initSpace(){
    var space = document.getElementsByClassName('espaco')
    for (let i = 0; i < space.length; i++) {
        space[i].addEventListener("click", function(){
            if(gameOver){
                return
            }
            if(this.getElementsByTagName("img").length == 0){
                if(playTime == player1){
                    this.innerHTML = "<img src='img/x.jpg' height='45px'>";
                    this.setAttribute("jogo", player1);
                    playTime = player2;
                } else{
                    this.innerHTML = "<img src='img/bola.jpg' height='45px'>";
                    this.setAttribute("jogo", player2);
                    playTime = player1;
                }
                refreshPlayer();
                winner();

            }
        });
        
    }
}

async function winner(){
    var a1 = document.getElementById("a1").getAttribute("jogo");
    var a2 = document.getElementById("a2").getAttribute("jogo");
    var a3 = document.getElementById("a3").getAttribute("jogo");

    var b1 = document.getElementById("b1").getAttribute("jogo");
    var b2 = document.getElementById("b2").getAttribute("jogo");
    var b3 = document.getElementById("b3").getAttribute("jogo");

    var c1 = document.getElementById("c1").getAttribute("jogo");
    var c2 = document.getElementById("c2").getAttribute("jogo");
    var c3 = document.getElementById("c3").getAttribute("jogo");

    var vencedor = "";

    if((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 & a1 != "")){
        vencedor = a1;
    } else if((b2 == b1 && b2 == b3 & b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != "")){
        vencedor = b2;
    } else if((c3 == c2 && c3 == c1 && c3 != "") || (c3 == a3 && c3 == b3 && c3 != "")){
        vencedor = c3
    }
    if(vencedor != ""){
        gameOver = true;

        await awt(50);
        alert("Vencedor foi o jogador '" + vencedor + "'")
        window.location.reload();
    }
    if((a1 != "" && a2 != "" && a3 != "" && b1 !="" && b2 !="" && b3 != "" && c1 != "" && c2 !="" && c3 !="" && vencedor == "")) {
        await awt(50);
        alert("A partida empatou")
        window.location.reload();
    }
}

function awt(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

refreshPlayer();
initSpace();