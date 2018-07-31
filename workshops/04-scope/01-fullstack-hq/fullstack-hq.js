// Edit the code below
let place = 'Planet Earth';

function fullstackHQ(){
  //console.log("fullstackHQ");
  // let newPlace = place + "," + middleFunction('United States');
  // let place = newPlace;

  //console.log(place);
  let newPlace = place + ", United States";
  middleFunction();

  console.log(newPlace);
  return newPlace;

  function middleFunction() {
    console.log("middleFunction");
    newPlace = newPlace + ', New York State'
    innerFunction();

    function innerFunction() {
      console.log("innerFunction");
      newPlace = newPlace + ', New York City';
      innermostFunction();

      function innermostFunction() {
        console.log("innermostFunction");
        newPlace = 'Fullstack HQ is at ' + newPlace;
      }
    }
  }
}

fullstackHQ();
