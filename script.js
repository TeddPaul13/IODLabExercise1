
//document.getElementById("oneDice").addEventListener("click", roll4SideDice)
function rollDice1(min, max){
    document.getElementById("diceNumber1").innerHTML = 
    Math.floor(Math.random() * (max-min)+min);
}
function rollAllDice(min, max){

    document.getElementById("diceNumber1").innerHTML = 
    Math.floor(Math.random() * (max-min)+min);

    document.getElementById("diceNumber2").innerHTML = 
    Math.floor(Math.random() * (max-min)+min);
}


function displayDice(){
    let x = document.getElementById("my-selector1").value;

    if (x === "1"){
        document.getElementById("second-dice").style.display = "none";
        document.getElementById("twoDice").style.display = "none";
    }
    if (x === "2"){
        document.getElementById("second-dice").style.display ="flex";
        document.getElementById("twoDice").style.display = "flex";
        document.getElementById("oneDice").style.display = "none";
    }

}
