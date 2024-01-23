let matrix = [];
let side = 10

function main(){
    const socket = io();

    console.log("ready to display game...")

    function gotMatrix(data){
        console.log(data);
        matrix = data
    };

    socket.on("matrix",gotMatrix)

    let knopf = document.getElementById("knopf")
    // knopf beenden
};

function setup(){
    createCanvas(500,500);
};

function draw(){
    console.log("draw")
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            if (matrix[x][y] === 1) {
                fill("green");
            } else if (matrix[x][y] === 2) {
                fill("red")
            } else if (matrix[x][y] === 3) {
                fill("purple")
            // } else if (matrix[x][y] === 4) {
            //     fill("white")
            } else {
                fill("yellow")
            } 
            rect(y * (500/matrix.length),x * (500/matrix.length),500/matrix.length,500/matrix.length)
            // rect(y * side,x * side,side,side)
        }
    }
}

// function draw(){
//     console.log('zeichne...', matrix)
//     for (let y = 0; y < matrix.length; y++) {
//         for (let x = 0; x < matrix[y].length; x++) {
//              fill("#ffffff");
//              let farbWert = matrix[y][x];
//              if(farbWert === 1){
//                  fill("#00ff00");
//              }else if(farbWert === 2){
//                  fill("#ffff00");
//              }else if(farbWert === 3){
//                  fill("#ff0000");
//              }else if(farbWert === 4){
//                  fill("#826E40");
//              }else if(farbWert === 5){
//                  fill("#FF00ff");
//              }
//              rect(x * side, y *side, side, side);
//         }   
//      }
// }

// module.exports = {draw}

window.onload = main()

// draw funktion bekommt daten nicht?
// oder anderes problem mit draw