// // Entsteht mit einer zufälligen Energie zwischen 150 und 200 an einem zufälligen Ort.
// // Verliert pro spielzug 2 Energiepunkte.
// // Wenn die Energie unter 0 ist, schmilzt er.
// // Wenn Schnee schmilzt, fallen 2 neue Schnee-Felder.
// // Grasfresser und Fleischfresser sterben, wenn sie in der Nähe davon sind.
// // Gras kann dort nicht wachsen.

// const tools = require("./Funktionen.js");

// module.exports = class Schnee {
//     zeile;
//     spalte;
//     energie = tools.randomNumber(150,200);
//     constructor(z,s) {
//         this.zeile = tools.randomNumber(0,matrix.length);
//         this.spalte = tools.randomNumber(0,matrix.length);
//     }
//     placeInMatrix() {
//         matrix[this.zeile][this.spalte] = 4;
//     };
//     spielzug() {
//         this.energie = this.energie - 2
//         if (this.energie < 0) {
//             this.melt();
//         }
//         console.log(this.energie)
//     };
//     melt() {
//         matrix[this.zeile][this.spalte] = 0;
//         tools.removeFromList(this,SnowArr);
//         for (let i = 0; i < 2; i++) {
//             let newSnow = new Schnee()
//             newSnow.placeInMatrix()
//             SnowArr.push(newSnow)
//         }
//     };
// };


