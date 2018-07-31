// YOUR CODE BELOW

function myOr(arg1, arg2, arg3) {
    console.log("myOr: ", arg1, arg2, arg3);
    
    var result = arg3;

    if (arg1) {
        result = arg1;
    } else if (arg2) {
        result = arg2;
    } else if (arg3) {
        result = arg3;
    }

    console.log(result);
    return result;
}
function myAnd(arg1, arg2, arg3) {
    console.log("myAnd: ", arg1, arg2, arg3);

    var result = arg3;

    if (!arg1) {
        result = arg1;
    } else if (!arg2) {
        result = arg2;
    } else if (!arg3) {
        result = arg3;
    }

    console.log(result);
    
    return result;
}

myOr(0, 0, false);