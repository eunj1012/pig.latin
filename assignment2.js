var inputElement = document.getElementById("user-input");


function displayMessage(){
    var input = inputElement.value;
    var sentence = input.split(" ");
    var pigTranslation = [];
    
    for (let i=0; i <= sentence.length - 1; i++){
        console.log(sentence[i]);
        pigTranslation.push(pigWord(sentence[i]));
    };
    output = pigTranslation.join(" ");
    document.getElementById("user-output").innerHTML = output;
}

function pigWord(word){
    var vowelRE = word.match(/[aeiou]/i);
    var vowelPos = word.indexOf(vowelRE);

    if (vowelPos > 0) {
        output = word.slice(vowelPos) + word.slice(0,vowelPos) + "ay";
    } else {
        output = word + "way";
    } 
    return output;
}

inputElement.oninput = displayMessage;
