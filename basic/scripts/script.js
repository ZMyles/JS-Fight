let playerHealth = 40;
let grant = 10;
let wins= 0;

const answer = prompt("Do you want to play a game?");


//------Damage function -------------------------
function getDamge() {
    let randomNum = Math.floor(Math.random() * 5 + 1);
    return randomNum;
}

getDamge();

//----- End of Damge function --------------------



function startCombat() {

if (answer.toUpperCase() === 'YES') {
    let playName = prompt("What is your name Warrior?");


    while (playerHealth >= 0) {
            // let randomNum = Math.floor(Math.random() * 2 + 1);
            // let randomNum2 = Math.floor(Math.random() * 2 + 1);
            // playerHealth -= randomNum;
            // grant -= randomNum2;
            

            let fightOn = prompt('Attack or Flee?');
            
        // conditional start --------------------
        if (fightOn.toUpperCase() === "ATTACK") {
            playerHealth -= getDamge();
            grant -= getDamge();
            console.log(`The player has ${playerHealth} HP!`);
            console.log(`But grant has ${grant}!`);

            if (playerHealth <= 0) {
                console.log("Grant wins this round.");
            }



            if(grant <= 0){
                console.log(`Grant lost this round.`);
                wins++;
                if (wins >= 3) {
                    console.log(`${playName} has deafeated the chicken! `);
                    break;
                }
                grant = 10;
                continue
            }

        } else {
            console.log("You escape with your life.");
            break;
        } //----------- conditional ends --------------------------
       
    }
} 


} //------ End of function --------------

console.log(startCombat());