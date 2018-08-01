// YOUR CODE BELOW

function myLastIndexOf(pArray, pSearch, pStartIndex) {
    let i;

    if (!pStartIndex) pStartIndex = pArray.length -1

    for (i=pStartIndex; i>=0; i--) {
        console.log("i:"+i, pArray[i], pSearch, pArray[i] === pSearch);
        
        if (pArray[i] === pSearch) {
            console.log("found:", i);
            return i;
        }
    }

    console.log("not found: -1");
    return -1;
}

myLastIndexOf([0, 10, 20, 10, 0], 10, 2);