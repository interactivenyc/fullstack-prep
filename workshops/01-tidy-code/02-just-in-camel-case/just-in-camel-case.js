// YOUR CODE BELOW
function justInCamelCase(underName) {
  let camelcaseOutput = "";
    let foundunder = false;
    for(let i = 0; i<underName.length; i++) {
    if (underName[i] === "_") {
      foundunder = true;
      } else {
        if (foundunder) {
          camelcaseOutput += underName[i].toUpperCase();
      foundunder = false;
    } else {
      camelcaseOutput += underName[i];
      }
  }
  }
      return camelcaseOutput;
}
