let inputvalue = document.getElementById("userinput");
let equalnumber = document.getElementById("gameresult");
let randomnumber = Math.ceil((Math.random()) * 100);

function checkguess() {
    let inputnumber = parseInt(inputvalue.value);
    if (inputnumber > randomnumber) {
        equalnumber.textContent = "To high Try Again";
        equalnumber.style.backgroundColor = "navy";
    } else if (inputnumber < randomnumber) {
        equalnumber.textContent = "To low Try Again";
        equalnumber.style.backgroundColor = "navy";

    } else if (inputnumber === randomnumber) {
        equalnumber.textContent = "congratulations You Won the Game";
        equalnumber.style.backgroundColor = "green";
    } else {
        equalnumber.textContent = "please provide a valuable input";
        equalnumber.style.backgroundColor = "red";
    }

}