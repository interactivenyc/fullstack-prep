// YOUR CODE BELOW

function makeGrid(numCols, numRows) {
    console.log("makeGrid:", numCols, numRows);
    
    let i;
    let j;
    let rowArray = [];

    for (i=0; i<numRows; i++) {        
        let colArray = [];

        for (j=0; j<numCols; j++) {
            colArray.push(j+1);
        }

        rowArray.push(colArray);
    }

    console.log(rowArray);
    return rowArray;
    
}

makeGrid(3,9);