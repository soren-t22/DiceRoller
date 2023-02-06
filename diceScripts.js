
function RollSixSidedDice(){
    
    var randomnum1 = (Math.floor(Math.random() * 6) + 1) * 10;
    var randomnum2 = (Math.floor(Math.random() * 6) + 1) * 100;
    var randomnum3 = (Math.floor(Math.random() * 6) + 1) * 1000;
    var randomnum4 = (Math.floor(Math.random() * 6) + 1) * 10000;
    var randomnum5 = (Math.floor(Math.random() * 6) + 1) * 100000;

    document.getElementById("dice").value = randomnum1 + randomnum2 + randomnum3 + randomnum4 + randomnum5;
    
}
