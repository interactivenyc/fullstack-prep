// YOUR CODE BELOW

function dogBreeder(param1, param2) {

    let obj = {};

    if (param2) {
        obj.name = param1;
        obj.age = param2;
    } else if (typeof param1 === 'number') {
        obj.name = 'Steve';
        obj.age = param1;
    } else if (typeof param1 === 'string') {
        obj.name = param1;
        obj.age = 0;
    } else {
        obj.name = 'Steve';
        obj.age = 0;
    }

    console.log(obj);
    return obj;
}

dogBreeder('Sam', 12);    // => {name: 'Sam', age: 12}
dogBreeder(15);    // => {name:'Steve', age: 15}
dogBreeder("Jeff");