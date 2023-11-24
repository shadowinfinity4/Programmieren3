class RasenDestroyer extends Lebewesen {
    placeInMatrix() {
        matrix[this.zeile][this.spalte] = 2
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
    stepForward() {
        let grass = this.createGrassMatrix();
        if (grass.length > 0) {
            let chosenGrass = grass[Math.floor(random(0,grass.length))];
            matrix[this.zeile][this.spalte] = 0;
            this.deleteObject(this.zeile,this.spalte);
            this.zeile = chosenGrass[0];
            this.spalte = chosenGrass[1];
            matrix[this.zeile][this.spalte] = 2;
        };
    };
    deleteObject(zeile,spalte) {
        let index = objekteListe.findIndex(function(grassObject){
            if (grassObject.zeile === zeile && grassObject.spalte === spalte) {
                return true
            } else {
                return false
            }
        });
        objekteListe.splice(index,1)
    }
};

let rasenDestroyerHacked = {
    zeile: 0,
    spalte: 0,
    placeInMatrix() {
        matrix[this.zeile][this.spalte] = 2
    },
    isInMatrix([a,b]) {
        if (a > 9 || a < 0 || b > 9 || b < 0) {
            return false
        } else {
            return true
        }
    },
    createGrassMatrix() {
        let neighbours = [
            [this.zeile + 1,this.spalte],
            [this.zeile - 1,this.spalte],
            [this.zeile,this.spalte + 1],
            [this.zeile,this.spalte - 1],
        ]
        return neighbours.filter(this.isInMatrix);
    },
    stepForward() {
        let grass = this.createGrassMatrix();
        if (grass.length > 0) {
            let chosenGrass = grass[Math.floor(random(0,grass.length))];
            matrix[this.zeile][this.spalte] = 1;
            this.zeile = chosenGrass[0];
            this.spalte = chosenGrass[1];
            matrix[this.zeile][this.spalte] = 2;
        }
    }
}

let rasenDestroyer = {
    zeile: 0,
    spalte: 0,
    placeInMatrix() {
        matrix[this.zeile][this.spalte] = 2
    },
    isGrass([a,b]) {
        if (a > (matrix.length-1)|| a < 0 || b > (matrix.length-1) || b < 0) {
            return false
        } else if (matrix[a][b] === 1) {
            return true
        } else {
            return false
        }
    },
    createGrassMatrix() {
        let neighbours = [
            [this.zeile + 1,this.spalte],
            [this.zeile - 1,this.spalte],
            [this.zeile,this.spalte + 1],
            [this.zeile,this.spalte - 1],
        ]
        return neighbours.filter(this.isGrass);
    },
    stepForward() {
        let grass = this.createGrassMatrix();
        if (grass.length > 0) {
            let chosenGrass = grass[0];
            matrix[this.zeile][this.spalte] = 0;
            this.zeile = chosenGrass[0];
            this.spalte = chosenGrass[1];
            matrix[this.zeile][this.spalte] = 2;
        }
    }
}
