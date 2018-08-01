// YOUR CODE BELOW

function removeColumns(pArray, pNum) {
    let i;
    let j;

    for (i=0; i<pArray.length; i++) {
        for (j=0; j<pNum; j++) {
            pArray[i].pop();
        }
    }

    console.log(pArray);
    return pArray;
}

removeColumns([[1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]], 2);
