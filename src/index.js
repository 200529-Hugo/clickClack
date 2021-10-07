var pointOne = 0;
var pointTwo = 0;
var time = 1000;
var game = 0

function start() {
    game = 0
    if (pointOne < pointTwo) {
        document.getElementById("timer").innerHTML = "PLAYER 2 HEEFT GEWONNEN"
    }
    if (pointOne > pointTwo) {
        document.getElementById("timer").innerHTML = "PLAYER 1 HEEFT GEWONNEN"

    }
    if (pointOne == pointTwo) {
        document.getElementById("timer").innerHTML = "DRAW"
    }
    pointOne = 0;
    pointTwo = 0;
}

function timer() {
    time--
    console.log(game)
    document.getElementById("timer").innerHTML = time

    if (time > 1) {
        setTimeout(timer, 1)
    } else {
        start()
    }
}

function control(){
    if (game == 1) {
        document.body.onkeyup = function () {
            pointOne++
            document.getElementById("pointOne").innerHTML = pointOne;
        }
    
        document.body.onclick = function () {
            pointTwo++
            document.getElementById("pointTwo").innerHTML = pointTwo;
        }
    } else {
        document.body.onkeyup = function () {
            document.getElementById("pointOne").innerHTML = "WAIT";
        }
    
        document.body.onclick = function () {
            document.getElementById("pointTwo").innerHTML = "WAIT";
        }
    }

    setTimeout(control, 1)
}

function begin() {
    game = 1
    time = 1000
    timer()
}
control()