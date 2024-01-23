const Grass = require("./classes/Gras.js");
const Grazer = require("./classes/Grasfresser.js");
const Fleischfresser = require("./classes/Fleischfresser.js");

// const funct = require("./client/client.js")

const express = require("express");
// const { ClientRequest } = require("http");
const app = express();

let server = require('http').Server(app);
let io = require('socket.io')(server);

let clients = [];
let isGameRunning = false;
let interValID;

app.use(express.static("./client"));

app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000, function () {
    console.log("Der Server läuft auf port 3000...");

    io.on("connection", function(socket) {
        console.log("ws connection established...");
        clients.push(socket.id);
        // Spielstart
        if (clients.length == 1 && isGameRunning == false) {
            console.log("Starte Spiel... Wenn noch nicht gestartet...")
            initGame()
            interValID = setInterval(updateGame, 900);
            isGameRunning = true;
        }
        // Verhalten wenn Clients verlassen
        socket.on("disconnect", function() {
            console.log("client left...");
            const foundIndex = clients.findIndex(id => id === socket.id);
            if (foundIndex >= 0) {
                clients.splice(foundIndex, 1);
            }
            if (clients.length === 0) {
                isGameRunning = false;
                clearInterval(interValID);
                console.log("Spiel gestoppt: keine Clients", clients.length);
            }
        });
    });
});







// game logic on server
matrix = [
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 1, 0, 3, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 2, 0],
    [1, 1, 0, 2, 0],
    [1, 1, 0, 0, 0]
];

module.exports = grassArr = [];
module.exports = grazerArr = [];
module.exports = predatorArr = [];

function getRandMatrix(cols, rows) {
    let matrix = [];
    for (let y = 0; y <= rows; y++) {
        matrix.push([]);
        for (let x = 0; x <= cols; x++) {
            matrix[y][x] = Math.floor(Math.random() * 2);
        }
    }
    return matrix;
}

function addMoreCreatures() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (y == x) {
                if (y % 2 == 0) matrix[y][x] = 3;
                else matrix[y][x] = 2;
            }
        }
    }
}


function initGame() {
    console.log('init game....');
    matrix = getRandMatrix(50, 50);
    addMoreCreatures();

    // durch Matrix laufen und Lebewesen erstellen
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grassObj = new Grass(x, y);
                grassArr.push(grassObj);
            } else if (matrix[y][x] == 2) {
                let grazerObj = new Grazer(x, y);
                grazerArr.push(grazerObj);
            } else if (matrix[y][x] == 3) {
                let predatorObj = new Fleischfresser(x, y);
                predatorArr.push(predatorObj);
            }
        }
    }
    console.log("Sende matrix zu clients");
    io.sockets.emit("matrix", matrix); // send matrix
}

function updateGame() {
    console.log("update game...");
    for (let i = 0; i < grassArr.length; i++) {
        let grassObj = grassArr[i];
        grassObj.spielzug();
    }


    for (let i = 0; i < grazerArr.length; i++) {
        let grazerObj = grazerArr[i];
        grazerObj.spielzug();
        grazerObj.multiply();

    }


    for (let i = 0; i < predatorArr.length; i++) {
        let predatorObj = predatorArr[i];
        predatorObj.spielzug();

    }
    console.log(matrix);

    console.log("sende matrix zu clients...");
    io.sockets.emit('matrix', matrix);
}



