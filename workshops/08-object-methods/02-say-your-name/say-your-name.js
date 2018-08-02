// YOUR CODE BELOW

let me2 = {};
me2.name = 'Tarana';
me2.getGreeting = function(you) {
    console.log('Hi ' + you.name + ', my name is ' + me2.name + '.');
    return 'Hi ' + you.name + ', my name is ' + me2.name + '.';
}

let you = {};
you.name = 'Alyssa';

console.log(me2.name); // 'Tarana'
console.log(you.name); // 'Alyssa'
me2.getGreeting(you); // => 'Hi Alyssa, my name is Tarana.'