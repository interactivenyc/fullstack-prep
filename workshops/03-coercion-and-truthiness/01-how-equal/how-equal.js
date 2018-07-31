// YOUR CODE BELOW

function howEqual(param1, param2) {
    var result;
    if (param1 === param2) {
        result = "strictly";
    } else if (param1 == param2) {
        result = "loosely"
    } else {
        result = "not equal";
    }

    console.log(result);
    return result; 
}

howEqual(0, '0'); // => loosely
howEqual(3, 9/3); // => strictly
howEqual(true, 'truthy') // => not equal