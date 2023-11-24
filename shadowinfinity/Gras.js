class Grass extends Lebewesen {
    energie = 0;
    placeInMatrix() {
        matrix[this.zeile][this.spalte] = 1
    };
    spielzug() {
        if (this.energie > 4) {
            this.plantNewGrass()
            this.energie = 0
        } else {
            this.energie++
        }
    };
    plantNewGrass() {
        let dirt = this.createDirtMatrix();
        if (dirt.length > 0) {

            let chosenDirt = dirt[Math.floor(random(0,dirt.length))];
            let newGrass = new Grass(chosenDirt[0],chosenDirt[1])
            newGrass.placeInMatrix();
            objekteListe.push(newGrass);
        };
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
    stepForward() {
        let grass = this.createGrassMatrix();
        if (grass.length > 0) {
            let chosenGrass = grass[0];
            matrix[this.zeile][this.spalte] = 0;
            this.zeile = chosenGrass[0];
            this.spalte = chosenGrass[1];
            matrix[this.zeile][this.spalte] = 2;
        };
    };
};
