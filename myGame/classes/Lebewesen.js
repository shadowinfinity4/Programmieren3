module.exports = class Lebewesen {
    x;
    y;
    constructor(z,s,) {
        this.x = z;
        this.y = s;
    }
    placeInMatrix() {
        matrix[this.x][this.y] = this.farbe;
    };
    createDirtMatrix() {
        let neighbours = [
            [this.x + 1,this.y],
            [this.x - 1,this.y],
            [this.x,this.y + 1],
            [this.x,this.y - 1],
            [this.x - 1,this.y - 1],
            [this.x + 1,this.y + 1],
            [this.x - 1,this.y + 1],
            [this.x + 1,this.y - 1]
        ]
        return neighbours.filter(koordinatenpaar => this.isWesen(koordinatenpaar,0));
    };
    createGrassMatrix() {
        let neighbours = [
            [this.x + 1,this.y],
            [this.x - 1,this.y],
            [this.x,this.y + 1],
            [this.x,this.y - 1],
            [this.x - 1,this.y - 1],
            [this.x + 1,this.y + 1],
            [this.x - 1,this.y + 1],
            [this.x + 1,this.y - 1]
        ]
        return neighbours.filter(koordinatenpaar => this.isWesen(koordinatenpaar,1));
    };
    createSnowMatrix() {
        let neighbours = [
            [this.x + 1,this.y],
            [this.x - 1,this.y],
            [this.x,this.y + 1],
            [this.x,this.y - 1],
            [this.x - 1,this.y - 1],
            [this.x + 1,this.y + 1],
            [this.x - 1,this.y + 1],
            [this.x + 1,this.y - 1]
        ]
        return neighbours.filter(koordinatenpaar => this.isWesen(koordinatenpaar,4));
    };
    createGrasfresserMatrix() {
        let neighbours = [
            [this.x + 1,this.y],
            [this.x - 1,this.y],
            [this.x,this.y + 1],
            [this.x,this.y - 1],
            [this.x - 1,this.y - 1],
            [this.x + 1,this.y + 1],
            [this.x - 1,this.y + 1],
            [this.x + 1,this.y - 1]
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
}