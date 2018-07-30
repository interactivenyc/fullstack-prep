// YOUR CODE BELOW

function myIndexOf(str, search, index=0) {
    var i;
    var indexLength = search.length;
    var returnIndex = -1;
    var testSlice;

    for (i=index; i<str.length; i++) {
        testSlice = str.slice(i, i+indexLength);
        //console.log(i, search, testSlice);
        
        if (testSlice === search) {
            returnIndex = i;
            break;
        }
    }
    console.log(returnIndex);
    
    return returnIndex;

}

myIndexOf('twice twice', 'ice');
myIndexOf('twice twice', 'ice', 5);