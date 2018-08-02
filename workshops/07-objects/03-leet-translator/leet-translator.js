let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW

function leetTranslator(text) {
    text = text.toLowerCase();
    let charIndex;
    let newText = "";

    for (let i=0; i<text.length; i++) {
        charIndex = letters.indexOf(text[i]);
        newText += leetChars[charIndex];
    }

    console.log(newText);
    return newText;
    
}
leetTranslator('Fullstack') 