let playerName;
let playerHP = 40;
let grantHP =10;
let wins = 0;


function startGame(){
    if (confirm("Do you want ot fight Grant the Chicken?")) {
        playerName = prompt('Enter your name');
        startCombat();

    } else {

        confirm("Player did not fight Grant the Chicken");
    }
}

function startCombat() {
    
        while (grantHP > 0 && playerHP > 0) {
            grantHP = grantHP - randDamage(1, 5);
            playerHP = playerHP - randDamage(1, 5);
        
            console.log(`Grants health ${grantHP}, ${playerName} health ${playerHP}`);
        }
        
        if (grantHP <= 0 && playerHP > 0) {
            wins++;
            grantHP = 10;
            console.log(`${playerName} has ${wins} wins`);

            prompt('Attack Grant the Chicken?', 'attack')
        }

        if (wins = 3){
            console.log(`${playerName} has defeated Grant the Chicken with ${wins} wins`);
        }
    } 

    
    
      

function randDamage(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

startGame();