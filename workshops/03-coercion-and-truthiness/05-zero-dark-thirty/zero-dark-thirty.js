// YOUR CODE BELOW

function zeroDarkThirty(num) {
    
    var numString = num.toString();
    
    while (numString.indexOf("0") > -1) {
        console.log(numString);
        numString = numString.replace("0","");
    }

    if (numString === "") {
        console.log("NaN");
        
        return NaN;
    }
    
    console.log(parseInt(numString));
    return parseInt(numString);
    
}



zeroDarkThirty(7809870);
zeroDarkThirty(0);