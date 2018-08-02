let animalNoises = [
  { 'dog': {
    'America' : 'Woof! Woof!',
    'Germany' : 'Wau Wau!',
    'England' : 'Bow wow!',
    'Uruguay' : 'Jua jua!',
    'Afrikaans' : 'Blaf!',
    'Korea' : 'Mong mong!',
    'Iceland' : 'Voff voff!',
    'Albania' : 'Ham!',
    'Algeria' : 'Ouaf ouaf!'
    }
  },
  { 'cat': {
    'America' : 'Meow',
    'Germany' : 'Miauw!',
    'England' : 'mew mew',
    'Uruguay' : 'Miau Miau!',
    'Afrikaans' : 'Purr',
    'Korea' : 'Nyaong!',
    'Iceland' : 'Kurnau!',
    'Albania' : 'Miau',
    'Algeria' : 'Miaou!'
    }
  },
  { 'chicken': {
    'America' : 'Cluck cluck',
    'Germany' : 'tock tock tock',
    'England' : 'Cluck Cluck',
    'Uruguay' : 'gut gut gdak',
    'Afrikaans' : 'kukeleku',
    'Korea' : 'ko-ko-ko',
    'Iceland' : 'Chuck-chuck!',
    'Albania' : 'Kotkot',
    'Algeria' : 'Cotcotcodet'
    }
  }
];

// YOUR CODE BELOW

function petSounds(animal, place) {

  for (let i=0; i<animalNoises.length; i++) {
    let animObj = animalNoises[i][animal]; 
    
    if (animObj) {
      //animal.charAt(0) = animal.charAt(0).toUpperCase();
      let capAnimal = animal[0].toUpperCase() + animal.substr(1);
      let animPhrase = capAnimal + "s in " + place + " say " + animObj[place];
      console.log(animPhrase);
      return animPhrase;
    }
  }  
}
petSounds('cat', 'Algeria');
petSounds('dog', 'Iceland'); // => Dogs in Iceland say Voff voff!
petSounds('cat', 'Korea'); // => Cats in Korea say Nyaong!

