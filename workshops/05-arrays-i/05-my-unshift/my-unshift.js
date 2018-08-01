// YOUR CODE BELOW

function myUnshift(pArray, pValue) {
    console.log(pArray, pValue);

    let i;
    let returnArray = [pValue];

    for (i=0; i<pArray.length; i++) {
        console.log("push:", pArray[i]);
        returnArray.push(pArray[i]);
    }

    console.log(returnArray);
    return returnArray;
}

unShift([1, 2, 3], 0); // => [0, 1, 2, 3];