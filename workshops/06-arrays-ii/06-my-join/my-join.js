// YOUR CODE BELOW

function myJoin(pArray, pSeparator=",") {

    let i;
    let returnString = "";

    for (i=0; i<pArray.length; i++) {
        if (pArray[i] != undefined || pArray[i] != null) {
            returnString += pArray[i];
        }
        
        if (i < pArray.length -1) {
            returnString += pSeparator;
        }
    }
    console.log(returnString);
    return returnString;
}

myJoin(['let\'s', 'make', 'a', 'list'], ' '); // => "let's make  a list"
myJoin(['a', 'b', 'c'], '+'); // => "a+b+c"
myJoin(['Peter', 'Paul', 'Mary']); // => "Peter,Paul,Mary"
myJoin(['hello', undefined, 'world'], '-'); // => "hello--world"

/*

```javascript
myJoin(['let\'s', 'make', 'a', 'list'], ' '); // => "let's make  a list"
myJoin(['a', 'b', 'c'], '+'); // => "a+b+c"
```

If separator is undefined, use ',' as the default separator.

```javascript
myJoin(['Peter', 'Paul', 'Mary']); // => "Peter,Paul,Mary"
```

If any elements in the array are undefined or null, they should be replaced with
an empty string in the returned string.

```javascript
myJoin(['hello', undefined, 'world'], '-'); // => "hello--world"
```

*/