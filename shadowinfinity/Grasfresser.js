class Grasfresser extends Lebewesen {
    energie = 15;
    placeInMatrix() {
        matrix[this.zeile][this.spalte] = 2;
    };

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
    };

    isGrass([a,b]) {
        if (a > (matrix.length-1)|| a < 0 || b > (matrix.length-1) || b < 0) {
            return false
        } else if (matrix[a][b] === 1) {
            return true
        } else {
            return false
        }
    };

    createGrassMatrix() {
        let neighbours = [
            [this.zeile + 1,this.spalte],
            [this.zeile - 1,this.spalte],
            [this.zeile,this.spalte + 1],
            [this.zeile,this.spalte - 1],
            [this.zeile - 1,this.spalte - 1],
            [this.zeile + 1,this.spalte + 1],
            [this.zeile - 1,this.spalte + 1],
            [this.zeile + 1,this.spalte - 1]
        ]
        return neighbours.filter(this.isGrass);
    };

    isSnow([a,b]) {
        if (a > (matrix.length-1)|| a < 0 || b > (matrix.length-1) || b < 0) {
            return false
        } else if (matrix[a][b] === 4) {
            return true
        } else {
            return false
        }
    };

    createSnowMatrix() {
        let neighbours = [
            [this.zeile + 1,this.spalte],
            [this.zeile - 1,this.spalte],
            [this.zeile,this.spalte + 1],
            [this.zeile,this.spalte - 1],
            [this.zeile - 1,this.spalte - 1],
            [this.zeile + 1,this.spalte + 1],
            [this.zeile - 1,this.spalte + 1],
            [this.zeile + 1,this.spalte - 1]
        ]
        return neighbours.filter(this.isSnow);
    };

    deleteObject(zeile,spalte) {
        let index = objekteListe.findIndex(function(object){
            if (object.zeile === zeile && object.spalte === spalte) {
                return true
            } else {
                return false
            }
        });
        objekteListe.splice(index,1)
    };
};