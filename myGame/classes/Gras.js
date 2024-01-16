const Lebewesen = require("./Lebewesen.js");

module.exports = class Grass extends Lebewesen {
    energie = 0;
    farbe = 1;
    spielzug() {
        if (this.energie > 10) {
            this.plantNewGrass()
            this.energie = 0
        } else {
            this.energie++
        }
    };
    plantNewGrass() {
        let dirt = this.createDirtMatrix();
        if (dirt.length > 0) {

            let chosenDirt = dirt[Math.floor(Math.random(0,dirt.length))];
            let newGrass = new Grass(chosenDirt[0],chosenDirt[1])
            console.log("Gras", newGrass.zeile, newGrass.spalte)
            newGrass.placeInMatrix();
            grassArr.push(newGrass);
        };
    };
};
