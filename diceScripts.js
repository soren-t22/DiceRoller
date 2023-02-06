
function RollSixSidedDice(){
    
    var randomnum1 = (Math.floor(Math.random() * 6) + 1);
    var randomnum2 = (Math.floor(Math.random() * 6) + 1);
    var randomnum3 = (Math.floor(Math.random() * 6) + 1);
    var randomnum4 = (Math.floor(Math.random() * 6) + 1);
    var randomnum5 = (Math.floor(Math.random() * 6) + 1);

    document.getElementById("dice1").value = randomnum1;
    document.getElementById("dice2").value = randomnum2;
    document.getElementById("dice3").value = randomnum3;
    document.getElementById("dice4").value = randomnum4;
    document.getElementById("dice5").value = randomnum5;
    
}
