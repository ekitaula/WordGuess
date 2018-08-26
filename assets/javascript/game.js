var words = {
    word1:"chiefs",
    word2:"raiders",
    word3:"buccaneers",
    word4:"broncos",
    word5:"dolphins",
    word6:"ravens",};

function randomizer (){
    return Object.values(words)[Math.floor((Math.random() * Object.values(words).length))];
};

var thisGameWord = randomizer ();
var length =thisGameWord.length;
var blank = "_";
var letters = blank.repeat(length);
var letters = [];
for (var i = 0; i< length; i++){ letters.push("_");};
var guessCount = 8;
var wins = sessionStorage.getItem("wins") ? sessionStorage.getItem("wins") : 0;
var losses = sessionStorage.getItem("losses") ? sessionStorage.getItem("losses") : 0;
var j = 1;
var guesses = []
console.log(thisGameWord);

window.onload = function startGame() {
    document.getElementById("blanks").innerHTML = "CURRENT WORD: "+ letters.join(" ");
    document.getElementById("guessRemaining").innerHTML = "GUESSES REMAINING: "+guessCount;
    document.getElementById("wins").innerHTML = "WINS: " + wins;
    document.getElementById("losses").innerHTML = "LOSSES: " + losses;

}

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    console.log("You Chose "+ userGuess);

    if(guesses.indexOf(userGuess)==-1){
        
        guesses.push(userGuess);
        
        guesses.sort()
        
        document.getElementById("guesses").innerHTML = guesses.join(", ");

    if (thisGameWord.indexOf(userGuess) > -1) {
        for (i=0;i<length; i++)
            if (thisGameWord[i] == userGuess) {
                
                letters[i] = userGuess;

                document.getElementById("blanks").innerHTML = "Current Word: "+ letters.join(" ");
            }
            if (letters.join("")==thisGameWord){

                
                alert ("Touchdown!!");
                function reloadWin() {
                    wins ++;

                    sessionStorage.setItem("wins", wins);
                    document.location.reload();
                }
                reloadWin()
            
            }
    
        }
    else {
        
        var misses = j++

        var guessCountMiss = (guessCount-misses)
        document.getElementById("guessRemaining").innerHTML = "Guesses Remaining: " + guessCountMiss;
    if(guessCountMiss==0) {

        alert ("Fumble!! Try Again.");
        function reloadLoss () {
            losses ++;
            sessionStorage.setItem("losses", losses);
            document.location.reload();
        }
        reloadLoss()
    }
    }
}
};
