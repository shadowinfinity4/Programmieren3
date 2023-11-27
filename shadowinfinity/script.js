// // session1
// // Animation

// function setup() {
//     createCanvas(500,500);
//     background("lightgrey");
//     frameRate(20)
// }

// let i = 0
// let a = i/2
// function draw() {
//     circle(250,250 + i,10 + i);
//     circle(250 + i,250,10 + i);
//     circle(250 - i,250,10 + i);
//     circle(250,250 - i,10 + i);
//     circle(250 + i/2,250 + i/2,10 + i);
//     circle(250 + i/2,250 - i/2,10 + i);
//     circle(250 - i/2,250 + i/2,10 + i);
//     circle(250 - i/2,250 - i/2,10 + i);
//     i = i + 10;
// }


// // session2
// // document.body.innerHTML = "Hallo"

// // rezept

// let anzahl = parseInt(prompt("Für wie viele Personen?"))

// let rezept = [
//     ["eier",1,"stck."],
//     ["milch",100,"ml"],
//     ["mehl",100,"g"]
// ]

// for (let i = 0; i < rezept.length; i++) {
//     rezept[i][1] = rezept[i][1] * anzahl
//     console.log(rezept[i][0],rezept[i][1],rezept[i][2])
// }


// // Schiffchen Versenken

// let matrix = [
//     [1,1,0,1,0,0,1,1,1,1],
//     [0,0,0,1,0,0,0,0,0,0],
//     [1,0,0,1,0,1,1,1,0,1],
//     [1,0,0,0,0,0,0,0,0,1],
//     [1,0,0,0,0,0,0,0,0,0],
//     [1,0,0,0,0,1,0,0,0,1],
//     [0,0,0,0,0,1,0,0,0,1],
//     [1,1,0,0,0,0,0,0,0,1],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,1,1,1,1,1,1]
// ];


// // Tests:
// console.log(istTreffer([0,0])); // true
// console.log(istTreffer([1,9])); // false
// console.log(istTreffer([9,8])); // true
// console.log(istTreffer([4,-2])); // false


// let matrix = [
//     [1,1,0,1,0,0,1,1,1,1],
//     [0,0,0,1,0,0,0,0,0,0],
//     [1,0,0,1,0,1,1,1,0,1],
//     [1,0,0,0,0,0,0,0,0,1],
//     [1,0,0,0,0,0,0,0,0,0],
//     [1,0,0,0,0,1,0,0,0,1],
//     [0,0,0,0,0,1,0,0,0,1],
//     [1,1,0,0,0,0,0,0,0,1],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,1,1,1,1,1,1]
// ];



// let koordinatenTabelle = [
// 	[0,0],
//     [0,1],
//     [0,2],
//     [0,3],
//     [0,4],
//     [0,5],
//     [0,6],
//     [0,7],
//     [0,8],
//     [0,9],
//     [1,0],
//     [1,1],
//     [1,2],
//     [1,3],
//     [1,4],
//     [1,5],
//     [1,6],
//     [1,7],
//     [1,8],
//     [1,9],
//     [2,0],
//     [2,1],
//     [2,2],
//     [2,3],
//     [2,4],
//     [2,5],
//     [2,6],
//     [2,7],
//     [2,8],
//     [2,9],
//     [3,0],
//     [3,1],
//     [3,2],
//     [3,3],
//     [3,4],
//     [3,5],
//     [3,6],
//     [3,7],
//     [3,8],
//     [3,9],
//     [4,0],
//     [4,1],
//     [4,2],
//     [4,3],
//     [4,4],
//     [4,5],
//     [4,6],
//     [4,7],
//     [4,8],
//     [4,9],
//     [5,0],
//     [5,1],
//     [5,2],
//     [5,3],
//     [5,4],
//     [5,5],
//     [5,6],
//     [5,7],
//     [5,8],
//     [5,9],
//     [6,0],
//     [6,1],
//     [6,2],
//     [6,3],
//     [6,4],
//     [6,5],
//     [6,6],
//     [6,7],
//     [6,8],
//     [6,9],
//     [7,0],
//     [7,1],
//     [7,2],
//     [7,3],
//     [7,4],
//     [7,5],
//     [7,6],
//     [7,7],
//     [7,8],
//     [7,9],
//     [8,0],
//     [8,1],
//     [8,2],
//     [8,3],
//     [8,4],
//     [8,5],
//     [8,6],
//     [8,7],
//     [8,8],
//     [8,9],
//     [9,0],
//     [9,1],
//     [9,2],
//     [9,3],
//     [9,4],
//     [9,5],
//     [9,6],
//     [9,7],
//     [9,8],
//     [9,9],
// ];

// let koordinatenTabelle = [];
// for (let z = 0; z < matrix.length; z++) {
//     for (let s = 0; s < matrix.length; s++) {
//         koordinatenTabelle.push([z,s]);
//     }
// }

// let treffer = koordinatenTabelle.filter(istTreffer)
// console.log(treffer)


// // session3
// // Matrizen Zeichnen

// let matrix1 = [
//     [1,1,0,1,0,0,1,1,1,1],
//     [0,0,0,1,0,0,0,0,0,0],
//     [1,0,0,1,0,1,1,1,0,1],
//     [1,0,0,0,0,0,0,0,0,1],
//     [1,0,0,0,0,0,0,0,0,0],
//     [1,0,0,0,0,1,0,0,0,1],
//     [0,0,0,0,0,1,0,0,0,1],
//     [1,1,0,0,0,0,0,0,0,1],
//     [0,0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,1,1,1,1,1,1]
// ];

// function setup() {
//     createCanvas(500,500);
//     background("lightgray");
//     frameRate(30);
// }

// function draw() {
//     zeichneMatrix(matrix1)
// }


// let bild = [[3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,2,0,0],
// [3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,2,0,0,0,0,0,0,1,0,0],
// [3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0],
// [3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0],
// [3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0],
// [3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,0,0,2,0,0,0,1,1,1,1,1,1,0,2,0,0,0,0,0,0,0,2,0,1,0,0,0,0],
// [3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// [3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
// [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,1,1,1,1,2,0,0,1,0,0,0,0,0,0,0,0,0,2,0,0,0],
// [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
// [1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0],
// [1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
// [1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1],
// [1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1],
// [1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,0,0,0,0,0,0,1,1,1,1,1,1],
// [1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,1,1,1,1,1,1,1],
// [1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1],
// [1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,0,0,2,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,0,0,2,1,1,1,1,1,1,1,1,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,2,0,0,2,0,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,1,1,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,2,0,0,1,1,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,2,0,0,0,0,0,1,1,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,1,1,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,1,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,2,0,0,0,1,1,1,1,1,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,2,0,0,1,1,1,1,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,1,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,2,0,0,0,0,0,0,2,0,1,1,1,1,3,3,3,3,3,3,3,3,3,1,1,1,1,1,1,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,2,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,1,0,0,2,1,0,2,0,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,1,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,2,0,0,1,1,1,1,0,1,0,0,1,0,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,1,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,3,3,3,3,3,3,3,3,3,3,3,3],
// [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,3,3,3,3,3,3,3,3,3,3],
// ]

// function setup() {
//     createCanvas(500,500);
//     background("lightgray");
//     frameRate(30);
// }

// function draw() {
//     zeichneMatrix(bild)
// }


// function setup() {
//     createCanvas(500,500);
//     background("lightgray");
//     frameRate(30);
// }

// let matrix2 = []

// for (let zeile = 0; zeile < 100; zeile++) {
//     matrix2.push([])
//     for (let spalte = 0; spalte < 100; spalte++) {
//         matrix2[zeile].push(randomNumber(0,1))
//     }
// }

// console.log(matrix2)

// function draw() {
//     zeichneMatrix(matrix2)
// }


// // andere Matrizen

// var matrix = [
//     ["#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#28B463","#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463"],
//     ["#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#28B463","#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#28B463","#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463"],
//     ["#ffffff","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#28B463","#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#28B463","#28B463","#28B463","#ffffff","#28B463","#ffffff","#28B463","#28B463","#ffffff","#28B463","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463"],
//     ["#ffffff","#ffffff","#ffffff","#ffffff","#28B463","#ffffff","#28B463","#28B463","#ffffff","#28B463","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#28B463","#28B463","#28B463","#28B463","#28B463","#ffffff","#28B463","#28B463","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463"],
//     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#28B463","#28B463","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463"],
//     ["#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463"],
//     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#28B463","#28B463","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#28B463","#28B463","#28B463","#28B463","#28B463","#ffffff","#28B463","#28B463","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463"],
//     ["#ffffff","#ffffff","#ffffff","#ffffff","#28B463","#ffffff","#28B463","#28B463","#ffffff","#28B463","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#28B463","#28B463","#28B463","#ffffff","#28B463","#ffffff","#28B463","#28B463","#ffffff","#28B463","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463","#28B463"],
//     ["#ffffff","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#28B463","#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#28B463","#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#2ECC71","#2ECC71","#2ECC71","#2ECC71","#2ECC71","#2ECC71","#2ECC71"],
//     ["#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#28B463","#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#2ECC71","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#28B463","#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#2ECC71","#ffffff","#28B463","#28B463","#28B463","#28B463","#28B463"],
//     ["#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#28B463","#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#2ECC71","#ffffff","#28B463","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#28B463","#28B463","#ffffff","#28B463","#ffffff","#28B463","#ffffff","#2ECC71","#ffffff","#28B463","#ffffff","#28B463","#28B463","#28B463"]
// ]

// var matrix = [
//     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#A04000","#A04000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#ffffff","#A04000","#A04000","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#ffffff","#A04000","#A04000","#ffdd00","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffdd00","#ffffff"],
//     ["#ffffff","#ffffff","#ffdd00","#ffdd00","#ffdd00","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffdd00","#ffdd00","#ffffff"],
//     ["#ffffff","#ffffff","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffffff"],
//     ["#ffffff","#ffffff","#ffffff","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffffff","#ffffff"],
//     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffffff","#ffffff"],
//     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffdd00","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
//     ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"]
// ]

// function draw() {
//     for (let zeile = 0; zeile < matrix.length; zeile++) {
//         for (let spalte = 0; spalte < matrix[zeile].length; spalte++) {
//             fill(matrix[zeile][spalte])
//             rect(spalte * 25,zeile * 25,25,25)
//         }
//     }
// }



// // session 4

// // RasenDestroyer

// function setup() {
//     createCanvas(500,500);
//     background("lightgray");
//     frameRate(60);
//     rasenDestroyer.placeInMatrix();
//     rasenDestroyer2.placeInMatrix();
// }

// erstelleMatrix(100,100)

// function draw() {
//     zeichneMatrix(matrix);
//     rasenDestroyer.stepForward();
// }


// // RasenDestroyer Hacked

// function setup() {
//     createCanvas(500,500);
//     background("lightgray");
//     frameRate(5);
//     rasenDestroyerHacked.placeInMatrix();
//     rasenDestroyer.placeInMatrix();
// }

// erstelleMatrix(10,10)

// function draw() {
//     zeichneMatrix(matrix);
//     rasenDestroyerHacked.stepForward();
//     rasenDestroyer.stepForward();
// }



// // session 5/6

// // RasenDestroyer x100

erstelleMatrix(50,50)

let x = 25
let y = 25

let objekteListe = [new Grass(x,y+1), new Grass(x,y+2), new Grass(x,y+3), 
    new Grass(x,y-1), new Grass(x,y-2), new Grass(x,y-3), 
    new Grass(x+1,y), new Grass(x+2,y), new Grass(x+3,y), 
    new Grass(x-1,y), new Grass(x-2,y), new Grass(x-3,y), 
    new Grasfresser(x,y), new Fleischfresser(10,10), new Schnee()]


function setup() {
    createCanvas(500,500);
    background("lightgray");
    frameRate(3);
    for (let i = 0; i < objekteListe.length; i++) {
        objekteListe[i].placeInMatrix()
    };
};

function draw() {
    zeichneMatrix(matrix);
    for (let i = 0; i < objekteListe.length; i++) {
        objekteListe[i].spielzug()
    };
};
