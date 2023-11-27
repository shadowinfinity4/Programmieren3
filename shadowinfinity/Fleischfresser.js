class Fleischfresser extends Lebewesen {
    energie = 1000;
    farbe = 3;
    spielzug() {
        let snow = this.createSnowMatrix();
        if (snow.length > 0) {
            this.die();
        } else if (this.energie > 2000) {
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
            let chosenGrasfresser = grasfresser[randomNumber(0,grasfresser.length)];
            matrix[this.zeile][this.spalte] = 0;
            this.deleteObject(chosenGrasfresser[0],chosenGrasfresser[1]);
            this.zeile = chosenGrasfresser[0];
            this.spalte = chosenGrasfresser[1];
            matrix[this.zeile][this.spalte] = 3;
        } else {
            this.energie--;
        }
    };
    multiply() {
        let grass = this.createGrassMatrix();
        if (grass.length > 0) {
            let chosenGrass = grass[randomNumber(0,grass.length)];
            this.deleteObject(chosenGrass[0],chosenGrass[1]);
            let newFleischfresser = new Fleischfresser(chosenGrass[0],chosenGrass[1])
            newFleischfresser.placeInMatrix();
            objekteListe.push(newFleischfresser);
        };
    };
    die() {
        matrix[this.zeile][this.spalte] = 0;
        this.deleteObject(this.zeile,this.spalte);
    };
};