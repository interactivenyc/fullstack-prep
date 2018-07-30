// YOUR CODE BELOW

function crazyCaps(str) {
    var i;
    var output = "";

    for (i=0; i<str.length; i++) {
        if (i%2 === 0) {
            output += str[i].toLowerCase();
        } else {
            output += str[i].toUpperCase();
        }
    }
    return output;
}
