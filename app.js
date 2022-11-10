let btnRestart = document.querySelector(".btnRestart");
let btnPlayer1 = document.querySelector(".player1");
let btnPlayer2 = document.querySelector(".player2");
let btnPlayer = document.querySelectorAll(".btnPlayer");
let d = document.querySelectorAll(".d");
let dice1 = document.querySelector(".dice1");
let dice2 = document.querySelector(".dice2");
let scorePlayer1 = document.querySelector(".scorePlayer1");
let scorePlayer2 = document.querySelector(".scorePlayer2");
let body = document.querySelector("body");
let cont = document.querySelector(".count");
let turn = document.querySelectorAll(".turn");
let count = 10;
let countScore = 0;
let placarPlayer1 = [];
let placarPlayer2 = [];
let resPlay1 = 0;
let resPlay2 = 0;


btnPlayer.forEach(function (value, index, array) {
    value.addEventListener("click", function () {


        if (value.dataset.name !== "" && value.dataset.name != "null") {


            const arrayBtns = [...array];

            let searchready = arrayBtns.map(element => element.dataset.ready != undefined);


            if (searchready.indexOf(false) == -1) {

                let dice = Math.floor((Math.random() * 6) + 1);

                // console.log(dice);
                // console.log(value);


                cont.innerHTML = "Jogadas: " + contador();

                if (value.dataset.player == 1) {
                    btnPlayer1.setAttribute("disabled", "disabled");
                    btnPlayer2.removeAttribute("disabled");
                    btnPlayer2.dataset.turn = "";
                    btnPlayer1.dataset.turn = "turn";
                    turn[1].classList.remove("__active");
                    turn[0].classList.add("__active");
                    // dice2.innerHTML = "-";
                    dice1.innerHTML = dice;
                    scorePlayer1.innerHTML += "<li>" + dice + "</li>";

                    placarPlayer1.push(dice);


                } else {
                    btnPlayer1.removeAttribute("disabled");
                    btnPlayer2.setAttribute("disabled", "disabled");
                    btnPlayer1.dataset.turn = "";
                    btnPlayer2.dataset.turn = "turn";
                    turn[0].classList.remove("__active");
                    turn[1].classList.add("__active");
                    // dice1.innerHTML = "-";
                    dice2.innerHTML = dice;
                    scorePlayer2.innerHTML += "<li>" + dice + "</li>";

                    placarPlayer2.push(dice);
                }

                if (count == 0) {
                    btnPlayer.forEach(function (bt) {
                        bt.setAttribute("disabled", "disabled");
                    })

                    turn.forEach(element => {
                        element.classList.remove("__active");
                    });

                    d.forEach(element => {
                        element.innerHTML = "-";
                    });
                }

                ganhador();

                document.querySelector(".pts1").innerHTML = resPlay1;
                document.querySelector(".pts2").innerHTML = resPlay2;
            }


        }

        if (value.dataset.name == "" || value.dataset.name == "null") {

            let resposta = prompt("Insira o nome do Jogador ");


            if (resposta == null || resposta == "") {
                value.innerHTML = "Identificar Jogador " + value.dataset.player;
            } else {
                value.innerHTML = resposta;
                value.dataset.name = resposta;
                value.dataset.ready = "ready";
            }

        }
    })
});

//RESETAR O GAME
btnRestart.addEventListener("click", function () {
    document.location.reload();
});

//CONTABILIZAR O GAME
function contador() {
    count--;
    return count;
}


//VERIFICAR QUEM GANHOU

function ganhador() {

    switch (count) {
        case 8:
            // console.log("Round 1");
            // (placarPlayer1[0] > placarPlayer2[0])?(resPlay1 += 1):(resPlay2 += 1);            
            if(placarPlayer1[0] > placarPlayer2[0]){
                resPlay1 +=1;
            }else if(placarPlayer1[0] < placarPlayer2[0]){
                resPlay2 += 1;
            }else {
                resPlay1 += 0;
                resPlay2 += 0;
            }
            break;
        case 6:
            // console.log("Round 2");
            // (placarPlayer1[1] > placarPlayer2[1])?(resPlay1 += 1):(resPlay2 += 1);
            if(placarPlayer1[1] > placarPlayer2[1]){
                resPlay1 +=1;
            }else if(placarPlayer1[1] < placarPlayer2[1]){
                resPlay2 += 1;
            }else {
                resPlay1 += 0;
                resPlay2 += 0;
            }
            break;
        case 4:
            // console.log("Round 3");
            // (placarPlayer1[2] > placarPlayer2[2])?(resPlay1 += 1):(resPlay2 += 1);
            if(placarPlayer1[2] > placarPlayer2[2]){
                resPlay1 +=1;
            }else if(placarPlayer1[2] < placarPlayer2[2]){
                resPlay2 += 1;
            }else {
                resPlay1 += 0;
                resPlay2 += 0;
            }
            break;
        case 2:
            // console.log("Round 4");
            // (placarPlayer1[3] > placarPlayer2[3])?(resPlay1 += 1):(resPlay2 += 1);
            if(placarPlayer1[3] > placarPlayer2[3]){
                resPlay1 +=1;
            }else if(placarPlayer1[3] < placarPlayer2[3]){
                resPlay2 += 1;
            }else {
                resPlay1 += 0;
                resPlay2 += 0;
            }
            break;
        case 0:
            // console.log("Round 5");
            // (placarPlayer1[4] > placarPlayer2[4])?(resPlay1 += 1):(resPlay2 += 1);
            if(placarPlayer1[4] > placarPlayer2[4]){
                resPlay1 +=1;
            }else if(placarPlayer1[4] < placarPlayer2[4]){
                resPlay2 += 1;
            }else {
                resPlay1 += 0;
                resPlay2 += 0;
            }
            break;
        default:
            break;
    }

    return [resPlay1, resPlay2];
}