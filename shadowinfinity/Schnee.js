// Entsteht mit einer zufälligen Energie zwischen 150 und 200 an einem zufälligen Ort.
// Verliert pro spielzug 2 Energiepunkte.
// Wenn die Energie unter 0 ist, schmilzt er.
// Wenn Schnee schmilzt, fallen 2 neue Schnee-Felder.
// Grasfresser und Fleischfresser sterben, wenn sie in der Nähe davon sind.
// Gras kann dort nicht wachsen.

class Schnee {
    zeile;
    spalte;
    energie = randomNumber(150,200);
    constructor(z,s) {
        this.zeile = randomNumber(0,matrix.length);
        this.spalte = randomNumber(0,matrix.length);
    }
    placeInMatrix() {
        matrix[this.zeile][this.spalte] = 4;
    };
    spielzug() {
        this.energie = this.energie - 2
        if (this.energie < 0) {
            this.melt();
        }
        console.log(this.energie)
    };

    melt() {
        matrix[this.zeile][this.spalte] = 0;
        this.deleteObject(this.zeile,this.spalte);
        for (let i = 0; i < 2; i++) {
            let newSnow = new Schnee()
            newSnow.placeInMatrix()
            objekteListe.push(newSnow)
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
    };
    };

