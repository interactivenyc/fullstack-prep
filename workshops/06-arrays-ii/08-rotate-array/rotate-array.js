// YOUR CODE BELOW

function rotateArray(pArray, pNum) {
    let i;

    for (i=0; i<Math.abs(pNum); i++){
        if (pNum > 0){
            pArray.unshift(pArray.pop());
        } else {
            pArray.push(pArray.shift());
        }
    }
    return pArray;
}
