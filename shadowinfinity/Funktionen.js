function erstelleMatrix(x,y) {
    matrix = []
    for (let zeile = 0; zeile < x; zeile++) {
        matrix.push([])
        for (let spalte = 0; spalte < y; spalte++) {
            matrix[zeile].push(0)
        }
    }
    return matrix
}

function zeichneMatrix(matrix) {
    for (let zeile = 0; zeile < matrix.length; zeile++) {
        for (let spalte = 0; spalte < matrix[zeile].length; spalte++) {
            if (matrix[zeile][spalte] === 1) {
                fill("green");
            } else if (matrix[zeile][spalte] === 2) {
                fill("red")
            } else if (matrix[zeile][spalte] === 3) {
                fill("purple")
            } else if (matrix[zeile][spalte] === 4) {
                fill("white")
            } else {
                fill("yellow")
            } 
            rect(spalte * (500/matrix.length),zeile * (500/matrix.length),500/matrix.length,500/matrix.length)
        }
    }
}

function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}

function istTreffer([a,b]) {
    if (a > 9 || a < 0 || b > 9 || b < 0) {
        return false
    } else if (matrix[a][b] === 1){
        return true
    } else {
        return false
    }

}