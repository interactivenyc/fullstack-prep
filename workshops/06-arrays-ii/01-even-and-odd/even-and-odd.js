// YOUR CODE BELOW

function evenAndOdd(pArray) {
    let i;
    let even = [];
    let odd = [];

    for (i=0; i<pArray.length; i++) {
        if (pArray[i]%2 === 0){
            even.push(pArray[i]);
        } else {
            odd.push(pArray[i]);
        }
    }

    return [even, odd];
}