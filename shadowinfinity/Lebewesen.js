class Lebewesen {
    zeile;
    spalte;
    constructor(z, s) {
        this.zeile = z;
        this.spalte = s
    }
    placeInMatrix() {
        matrix[this.zeile][this.spalte] = this.farbe;
    };
    isDirt([a,b]) {
        if (a > (matrix.length-1)|| a < 0 || b > (matrix.length-1) || b < 0) {
            return false
        } else if (matrix[a][b] === 0) {
            return true
        } else {
            return false
        }
    };
    createDirtMatrix() {
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
        return neighbours.filter(this.isDirt);
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
}