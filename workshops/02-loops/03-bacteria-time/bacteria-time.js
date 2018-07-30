// YOUR CODE BELOW

console.log('\x1Bc');

function bacteriaTime(startNum, target) {
    var intervals = 0;
    var total = startNum;
    console.log("intervals:", intervals);

    if (target < startNum) return 'targetNum must be larger than currentNum';

    while (total < target) {
        intervals ++;
        total *= 2;
        console.log("intervals:", intervals);
        console.log(target, total);
    }

    let timeElapsed = intervals * 20;
    console.log("timeElapsed:", timeElapsed);
    return timeElapsed;
}

bacteriaTime(1,20);