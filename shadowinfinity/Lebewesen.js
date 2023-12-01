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
        return neighbours.filter(koordinatenpaar => this.isWesen(koordinatenpaar,0));
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
        return neighbours.filter(koordinatenpaar => this.isWesen(koordinatenpaar,1));
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
        return neighbours.filter(koordinatenpaar => this.isWesen(koordinatenpaar,4));
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
        return neighbours.filter(koordinatenpaar => this.isWesen(koordinatenpaar,2));
    };
    isWesen([x,y],c) {
        if (x > (matrix.length-1)|| x < 0 || y > (matrix.length-1) || y < 0) {
            return false
        } else if (matrix[x][y] === c) {
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