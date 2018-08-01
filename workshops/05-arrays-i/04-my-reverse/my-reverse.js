// YOUR CODE BELOW

function myReverse(pArray) {
    let i;
    let returnArray = [];
    for (i=pArray.length-1; i>=0; i--) {
        returnArray.push(pArray[i]);
    }
    return returnArray;
}