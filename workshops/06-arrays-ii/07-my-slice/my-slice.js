// YOUR CODE BELOW

function mySlice(pArray, pStart=0, pEnd) {
    let i;
    let returnArray = [];

    console.log("");
    console.log("pArray:", pArray);
    console.log("orig pStart/pEnd:", pStart, pEnd);
    
    if (pStart === undefined) return pArray;
    if (pEnd === undefined) pEnd = pArray.length;
    if (pStart < 0) pStart = pArray.length + pStart;
    if (pEnd < 0) pEnd = pArray.length + pEnd;

    console.log("mod pStart/pEnd:", pStart, pEnd);

    for (i=Math.abs(pStart); i<pEnd; i++) {
        returnArray.push(pArray[i]);
    }

    console.log(returnArray);
    return returnArray;
    
}


console.log("test 1");
console.log(['bagel', 'baguette', 'bialy', 'brioche'].slice(-2));
mySlice(['bagel', 'baguette', 'bialy', 'brioche'], -2); //['bialy', 'brioche']

console.log("");

console.log("test 2");
console.log(['bagel', 'baguette', 'bialy', 'brioche'].slice(0, -1));
mySlice(['bagel', 'baguette', 'bialy', 'brioche'], 0, -1); //['bagel', 'baguette', 'bialy']

console.log("");

console.log("passing tests");

mySlice([1, 2, 3], 1, 2) // => [2]
mySlice([1, 2, 3], 1) // => [2, 3]
mySlice([1, 2, 3]) // => [1, 2, 3]
mySlice([1, 2, 3], -1) // => [3]
