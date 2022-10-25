const dice = document.getElementById("dice");

dice.addEventListener("click", function() {
    playerScore = Math.floor(Math.random() * 6) + 1;
    console.log(`Il punteggio del giocatore è ${playerScore}`);
    cpuScore = Math.floor(Math.random() * 6) + 1;
    console.log(`Il punteggio del computer è ${cpuScore}`);

    if 
        (playerScore > cpuScore) {
        console.log(`${playerScore} è più alto di ${cpuScore}, il giocatore vince.`);}
        
    else if 
        (cpuScore > playerScore) {
        console.log(`${playerScore} è più basso di ${cpuScore}, il computer vince.`);
    }
    else 
        {console.log("Pareggio.");}
}
)