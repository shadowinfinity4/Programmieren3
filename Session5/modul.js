module.exports = class Square {
    constructor(side){
        this.side = side
        this.area = side * side
    }

    getPerimeter(){
        return 4*this.side
    }
}