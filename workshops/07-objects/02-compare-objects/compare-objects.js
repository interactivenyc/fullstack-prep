// YOUR CODE BELOW

function compareObjects(obj1, obj2) {
    let result = true;

    if (Object.keys(obj1).length === Object.keys(obj2).length) {
        for (let prop in obj1){
            if (obj1[prop] != obj2[prop]){
                result = false;
            }
        }
    } else {
        result = false
    }

    console.log(result);
    return result;
}



compareObjects({ name: 'nick' }, { name: 'nick' }) // -> true
compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }) // -> false
compareObjects({a: 1, b: 2}, {a: 1, c: 2})