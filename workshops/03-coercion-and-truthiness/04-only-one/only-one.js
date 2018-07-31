// YOUR CODE BELOW

function onlyOne(arg1, arg2, arg3) {
    var trueCount = 0;

    if (arg1) trueCount ++;
    if (arg2) trueCount ++;
    if (arg3) trueCount ++;

    if (trueCount > 0 && trueCount < 2) {
        return true;
    }
    return false;
}
