const Lebewesen = require("./Lebewesen.js");

const tools = require("./Funktionen.js");

module.exports = class Grasfresser extends Lebewesen {
    energie = 15;
    farbe = 2;
    spielzug() {
        // let snow = this.createSnowMatrix();
        // if (snow.length > 0) {
        //     this.die();
        // } else
        if (this.energie > 50) {
            this.energie = 15;
            this.multiply();
        } else if (this.energie > 0) {
            this.move();
        } else {
            this.die();
        }
    };
    move() {
        let grass = this.createGrassMatrix();
        if (grass.length > 0) {
            this.energie++
            let chosenGrass = grass[tools.randomNumber(0,grass.length)];
            matrix[this.x][this.y] = 0;
            tools.removeFromList(chosenGrass,grassArr);
            this.x = chosenGrass[0];
            this.y = chosenGrass[1];
            matrix[this.x][this.y] = 2;
        } else {
            this.energie = this.energie - 1;
        }
    };
    multiply() {
        let grass = this.createGrassMatrix();
        if (grass.length > 0) {
            let chosenGrass = grass[Math.floor(tools.randomNumber(0,grass.length))];
            tools.removeFromList(chosenGrass,grassArr);
            let newGrasfresser = new Grasfresser(chosenGrass[0],chosenGrass[1])
            console.log("Grasfresser", newGrasfresser.x, newGrasfresser.y)
            newGrasfresser.placeInMatrix();
            predatorArr.push(newGrasfresser);
        };
    };
    die() {
        matrix[this.x][this.y] = 0;
        tools.removeFromList(this,grassArr);
        console.log("tot")
    };
};