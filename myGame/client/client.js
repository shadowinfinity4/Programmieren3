const { fill } = require("../server");

let matrix = [];
// let side = 10

function main() {
    const socket = io();

    console.log("ready to display game...")

    function gotMatrix(data) {
        console.log(data);
        matrix = data
    };

    socket.on("matrix", gotMatrix)

    let knopf = document.getElementById("knopf")
    knopf.onclick = function knopfGedrückt() {
        console.log("KNOPFDRUCK")
    }
};

function setup() {
    createCanvas(500, 500);
};

function draw() {
    console.log("draw")
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            if (matrix[x][y] === 1) {
                // if (season === true)
                fill("green");
                // else {
                //     fill("white")
                }
            } else if (matrix[x][y] === 2) {
                fill("red")
            } else if (matrix[x][y] === 3) {
                fill("purple")
                // } else if (matrix[x][y] === 4) {
                //     fill("white")
            } else {
                fill("yellow")
            }
            rect(y * (500 / matrix.length), x * (500 / matrix.length), 500 / matrix.length, 500 / matrix.length)
            // rect(y * side,x * side,side,side)
        }
    }
}


// module.exports = {draw}

window.onload = main()

// draw funktion bekommt daten nicht?
// oder anderes problem mit draw