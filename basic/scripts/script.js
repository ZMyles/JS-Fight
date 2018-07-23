let playerHealth = 40;
let grant = 10;
let wins= 0;

const answer = prompt("Do you want to play a game?");

if (answer.toUpperCase() === 'YES') {
    let playName = prompt("What is your name Warrior?");

   
    while (playerHealth >= 0) {
            let randomNum = Math.floor(Math.random() * 2 + 1);
            let randomNum2 = Math.floor(Math.random() * 2 + 1);
            playerHealth -= randomNum;
            grant -= randomNum2;
    
            console.log(`The player has ${playerHealth} HP!`);
            console.log(`But grant has ${grant}!`);

            if (playerHealth <= 0) {
                console.log("Grant wins");
                continue;
            }



            if(grant <= 0){
                wins++;
                if (wins >= 3) {
                    console.log(`${playName} wins `);
                    break;
                }
                grant = 10;
            }


    }







    // while (playerHealth === 40 && grant === 10) {
    //     let randomNum = Math.floor(Math.random() * 3);
    //     playerHealth -= randomNum;
    //     grant -= randomNum;

    //     console.log(`The player has ${playerHealth} HP!`);
    //     console.log(`But grant has ${grant}!`);
    // }

} 

