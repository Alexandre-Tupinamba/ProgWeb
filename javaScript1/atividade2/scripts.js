function escolha(){
    console.log("escolha sua jogada: \n1 - Papel\n2 - Pedra\n3 - Tesoura");
}

function Random() {
    min = 1;
    max = 3;
    return Math.floor(Math.random() * max + min);
}
function valida(jogada){
    if(jogada === 1 ||jogada === 2 ||jogada === 3){
        return true;
    }
    return false;
}
function MostraJogoMaquina(jogoMaquina){
    if( jogoMaquina === 1){
        console.log("O computador jogou Papel");
    }
    else if( jogoMaquina === 2){
        console.log("O computador jogou Pedra");
    }
    else if( jogoMaquina === 3){
        console.log("O computador jogou Tesoura");
    }
}

function vitoria(jogada){
    jogoMaquina = Random();
    if(jogoMaquina === 1){
        MostraJogoMaquina(1);
        if(jogada === 3){
            console.log("Você ganhou!");
            return true;
        }
    }
    else if(jogoMaquina === 2){
        MostraJogoMaquina(2);
        if(jogada === 1){
            console.log("Você ganhou!");
            return true;
        }
    }
    else if(jogoMaquina === 3){
        MostraJogoMaquina(3);
        if(jogada === 2){
            console.log("Você ganhou!");
            return true;
        }
    }
    if(jogada === jogoMaquina){
        console.log("A rodada empatou!");
        return null;
    }
    return false;
}

let jogada;
let pountuacao = 0;
while(true){
    escolha();
    jogada = parseInt(prompt());
    if(!valida(jogada)){
        break;
    };
    vitoriaOuEmpate = vitoria(jogada);
    if(vitoriaOuEmpate){ // se ganhar
        pountuacao++;
    }
    else if(vitoriaOuEmpate != null){ //se perder
        console.log(`Você perdeu! A sua pontuação foi ${pountuacao}`);
        break;
    }

}
