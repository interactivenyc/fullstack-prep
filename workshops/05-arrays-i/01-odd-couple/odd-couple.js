// YOUR CODE BELOW

function oddCouple(pArray) {
    var i;
    var returnArray = [];

    for (i=0; i<pArray.length; i++) {
        if (pArray[i]%2 != 0) {
            console.log(pArray[i]);
            
            returnArray.push(pArray[i]);
            if (returnArray.length === 2) {
                console.log(returnArray);
                return returnArray;
            }
        }
    }

    return returnArray;
}

oddCouple([3, 6, 9, 12, 15]);