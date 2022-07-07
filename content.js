console.log("Hello");

var boldLength, boldSubstr, endPosition, lengthOfThisWord, output, paragraphAsString, remainingTxtInParagraph, startPosition, text, theParagraph, words;

let paragraphs = document.getElementsByTagName('p');


for (let i = 0; i < paragraphs.length; i++) {
    
    p = paragraphs[i];
    console.log(p);
    
    text = p.innerText;
    words = text.split(" ");
    console.log(words);

    output = "";
    
    for (word of words) {
        if (word.length == 1) {
            output = output + word.bold() + " ";
        } else if (word.length > 1) {
            boldLength = Math.floor(word.length/2);
            boldSubstr = word.substr(0,boldLength).bold();
            normalSubstr = word.substr(boldLength);
            output = output + boldSubstr + normalSubstr + " ";
        }

    }

    p.innerHTML = output;
}
