// YOUR CODE BELOW

function zooInventory(pArray) {
    let i;
    let returnArray = [];
    let returnString;

    for (i=0; i<pArray.length; i++) {
        returnString = "";
        returnString += pArray[i][0] + " the " + pArray[i][1][0] + " is " + pArray[i][1][1] + ".";
        returnArray.push(returnString);
    }

    console.log(returnArray);
    return returnArray;
}

let myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
  ];
  
  zooInventory(myZoo);
  /* => ['King Kong the gorilla is 42.',
         'Nemo the fish is 5.'
         'Punxsutawney Phil the groundhog is 11.']
  */
