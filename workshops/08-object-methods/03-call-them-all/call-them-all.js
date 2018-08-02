// YOUR CODE BELOW

function callThemAll(obj, num) {

    let keys = Object.keys(obj);
    let resultArray = [];
    
    for (let i=0; i<keys.length; i++) {
        if (typeof obj[keys[i]] === 'function') {
            let result = obj[keys[i]](num);
            resultArray.push(result);
        }
    }

    console.log(resultArray);
    return resultArray;
}


let addNums = {
    addTen: function(num) {
      return num + 10;
    },
  
    addTwenty: function(num) {
      return num + 20;
    },
  
    someProperty: 'value'
  };
  
  callThemAll(addNums, 100); // => [110, 120]