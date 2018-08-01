// YOUR CODE BELOW

function arrayFlattener(pArray){
    let i;
    var flatArray = [];

    for (i=0; i<pArray.length; i++) {
        console.log(typeof pArray[i]);
        
        if (typeof pArray[i] === 'object'){
            flatten(pArray[i]);
        }else{
            flatArray.push(pArray[i]);
        }
    }

    function flatten(pArray) {
        console.log("flatten:", pArray);
        
        let i;

        for (i=0; i<pArray.length; i++) {
            flatArray.push(pArray[i]);
        }
    }

    console.log(flatArray);
    return flatArray;
}

arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]
