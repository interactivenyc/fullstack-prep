// YOUR CODE BELOW

function exponentiate(num, power) {
    var i;
    var result = num;

    if (power === 0) return 1;

    for (i=2; i<=power; i++) {
        result *= num;

        console.log(num, i, result);

    }

    console.log('result:', result);
    
    return result;
}

exponentiate(3, 6);