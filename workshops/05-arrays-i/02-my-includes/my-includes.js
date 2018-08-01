// YOUR CODE BELOW

function myIncludes(pArray, pSearch) {
    let i;

    for (i=0; i<pArray.length; i++) {
        if (pSearch === pArray[i]) {
            return true;
        }
    }
    return false;
}
