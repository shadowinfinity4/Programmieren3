class Grasfresser extends Lebewesen {
    energie = 15;
    farbe = 2;
    spielzug() {
        let snow = this.createSnowMatrix();
        if (snow.length > 0) {
            this.die();
        } else if (this.energie > 30) {
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
            let chosenGrass = grass[randomNumber(0,grass.length)];
            matrix[this.zeile][this.spalte] = 0;
            this.deleteObject(chosenGrass[0],chosenGrass[1]);
            this.zeile = chosenGrass[0];
            this.spalte = chosenGrass[1];
            matrix[this.zeile][this.spalte] = 2;
        } else {
            this.energie = this.energie - 1;
        }
    };
    multiply() {
        let grass = this.createGrassMatrix();
        if (grass.length > 0) {
            let chosenGrass = grass[Math.floor(randomNumber(0,grass.length))];
            this.deleteObject(chosenGrass[0],chosenGrass[1]);
            let newGrasfresser = new Grasfresser(chosenGrass[0],chosenGrass[1])
            newGrasfresser.placeInMatrix();
            objekteListe.push(newGrasfresser);
        };
    };
    die() {
        matrix[this.zeile][this.spalte] = 0;
        this.deleteObject(this.zeile,this.spalte);
        console.log("tot")
    };
};