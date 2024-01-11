let matrix = [];

function main(){
    const socket = io();

    console.log("ready to display game...")

    function gotMatrix(data){
        console.log(data);
        matrix = data
    };

    socket.on("matrix",gotMatrix)
};

function setup(){
    createCanvas(500,500);
};

function draw(){
    for (let zeile = 0; zeile < matrix.length; zeile++) {
        for (let spalte = 0; spalte < matrix[zeile].length; spalte++) {
            if (matrix[zeile][spalte] === 1) {
                fill("green");
            } else if (matrix[zeile][spalte] === 2) {
                fill("red")
            } else if (matrix[zeile][spalte] === 3) {
                fill("purple")
            } else if (matrix[zeile][spalte] === 4) {
                fill("white")
            } else {
                fill("yellow")
            } 
            rect(spalte * (500/matrix.length),zeile * (500/matrix.length),500/matrix.length,500/matrix.length)
        }
    }
}

module.exports = {draw}

window.onload = main

// function draw überprüfen