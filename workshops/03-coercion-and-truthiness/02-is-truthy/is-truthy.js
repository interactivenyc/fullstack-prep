// YOUR CODE BELOW

function isTruthy(arg1) {
    var result;
    if (arg1) {
        result = true;
    } else {
        if (arg1 === "") result = 'The empty string is falsey (the only falsey string)';
        if (arg1 === false) result = 'The boolean value false is falsey';
        if (arg1 === null) result = 'The null value is falsey';
        if (arg1 === undefined) result = 'undefined is falsey';
        if (arg1 === 0) result = 'The number 0 is falsey (the only falsey number)';
    }

    console.log(result);
    return result;
}

isTruthy('I yearn for truth'); // => true
isTruthy(null); // => The null value is falsey