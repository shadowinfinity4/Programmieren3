function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}

const removeFromList = (obj, list) => {
    for (let i = 0; i < list.length; i++) {
        if(obj.x == list[i].x && obj.y == list[i].y){
            list.splice(i, 1);
            break;
        }  
    }
}

module.exports = {randomNumber,removeFromList}

