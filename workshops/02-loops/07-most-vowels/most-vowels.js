// YOUR CODE BELOW
console.clear();

function mostVowels(sentence) {
    
    //clear period at end of sentences
    if (sentence[sentence.length-1] === "."){
        sentence = sentence.slice(0, sentence.length-1);
    };
    
    var sentenceArray = sentence.split(' ');
    var result = "";
    var mostVowelsNum = 0;
    var vowelCount;
    var i;
    var j;
    var word;
    let vowels = ["a", "e", "i", "o", "u"];

    for (i=0; i<sentenceArray.length; i++){
        word = sentenceArray[i];
        vowelCount = 0;
        for (j=0; j<word.length; j++){
            if (vowels.indexOf(word[j]) > -1) vowelCount++;
        }
        if (vowelCount > mostVowelsNum) {
            mostVowelsNum = vowelCount;
            result = word;
        }

    }
    console.log("final:", result);
    
    return result;
}

mostVowels('I am a keeper with some real rhythms')