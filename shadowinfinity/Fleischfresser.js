class Fleischfresser extends Lebewesen {
    energie = 1000;
    placeInMatrix() {
        matrix[this.zeile][this.spalte] = 3;
    };

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

    isGrasfresser([a,b]) {
        if (a > (matrix.length-1)|| a < 0 || b > (matrix.length-1) || b < 0) {
            return false
        } else if (matrix[a][b] === 2) {
            return true
        } else {
            return false
        }
    };

    createGrasfresserMatrix() {
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
        return neighbours.filter(this.isGrasfresser);
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
    }
};