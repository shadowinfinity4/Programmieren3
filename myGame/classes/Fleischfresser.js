const Lebewesen = require("./Lebewesen.js");

const tools = require("./Funktionen.js");

module.exports = class Fleischfresser extends Lebewesen {
    energie = 1000;
    farbe = 3;
    spielzug() {
        // let snow = this.createSnowMatrix();
        // if (snow.length > 0) {
        //     this.die();
        // } else 
        if (this.energie > 2000) {
            this.energie = 1000;
            this.multiply();
        } else if (this.energie > 0) {
            this.move();
        } else {
            this.die();
        }
    };
    move() {
        let grasfresser = this.createGrasfresserMatrix();
        if (grasfresser.length > 0) {
            this.energie = this.energie + 100;
            let chosenGrasfresser = grasfresser[tools.randomNumber(0,grasfresser.length)];
            matrix[this.x][this.y] = 0;
            tools.removeFromList(chosenGrasfresser,grazerArr);
            this.x = chosenGrasfresser[0];
            this.y = chosenGrasfresser[1];
            matrix[this.x][this.y] = 3;
        } else {
            this.energie--;
        }
    };
    multiply() {
        let grass = this.createGrassMatrix();
        if (grass.length > 0) {
            let chosenGrass = grass[tools.randomNumber(0,grass.length)];
            tools.removeFromList(chosenGrass,grassArr);
            let newFleischfresser = new Fleischfresser(chosenGrass[0],chosenGrass[1])
            console.log("Fleischfresser", newFleischfresser.x, newFleischfresser.y)
            newFleischfresser.placeInMatrix();
            predatorArr.push(newFleischfresser);
        };
    };
    die() {
        matrix[this.x][this.y] = 0;
        tools.removeFromList(this,predatorArr);
    };
};