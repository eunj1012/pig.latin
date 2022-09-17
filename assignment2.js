
function displayMessage(){
    var input = document.getElementById("user-input").value;
    input += " aloha";

    document.getElementById("user-output").innerHTML = input;

    console.log("it's working!");
    console.log(input);
}

document.getElementById("user-input").oninput= displayMessage;
