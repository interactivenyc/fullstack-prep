// YOUR CODE BELOW

function frequencyAnalysis(letters) {
    let obj = {};

    for (let i=0; i<letters.length; i++) {
        if (obj[letters[i]]) {
            obj[letters[i]] ++;
        } else {
            obj[letters[i]] = 1;
        }
    }

    console.log(obj);
    return obj;
}

frequencyAnalysis('aeiouaooau');