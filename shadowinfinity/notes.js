class Lebewesen {
    zeile;
    spalte;
    neighbours;
    constructor(z, s) {
        this.zeile = z;
        this.spalte = s;
        this.neighbours = [
            [this.zeile + 1,this.spalte],
            [this.zeile - 1,this.spalte],
            [this.zeile,this.spalte + 1],
            [this.zeile,this.spalte - 1],
            [this.zeile - 1,this.spalte - 1],
            [this.zeile + 1,this.spalte + 1],
            [this.zeile - 1,this.spalte + 1],
            [this.zeile + 1,this.spalte - 1]
        ];
    }
    placeInMatrix() {
        matrix[this.zeile][this.spalte] = this.farbe;
    };
    createDirtMatrix() {
        return neighbours.filter(this.isWesen(0));
    };
    createGrassMatrix() {
        return neighbours.filter(this.isWesen(1));
    };
    createGrasfresserMatrix() {
        return neighbours.filter(this.isWesen(2));
    };
    createSnowMatrix() {
        return neighbours.filter(this.isWesen(4));
    };
    isWesen([a,b],f) {
        if (a > (matrix.length-1)|| a < 0 || b > (matrix.length-1) || b < 0) {
            return false
        } else if (matrix[a][b] === f) {
            return true
        } else {
            return false
        }
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

// filter funktioniert nicht