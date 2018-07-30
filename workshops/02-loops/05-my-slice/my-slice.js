// YOUR CODE BELOW

function mySlice(str, start, end) {
    var result;
    if (start && end) {
        result = str.slice(start, end);
    } else if (start) {
        result = str.slice(start);
    } else {
        result = str;
    }

    console.log(result);
    return result;
}

mySlice('slice and dice', 2, 5);
