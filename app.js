const p1 = {        // we're creating an abject so we can group everything
    score: 0,
    button: document.querySelector('#btn1'),
    display: document.querySelector('#p1Display')

}
const p2 = {        // we're creating an abject so we can group everything
    score: 0,
    button: document.querySelector('#btn2'),
    display: document.querySelector('#p2Display')

}


const resetBtn = document.querySelector('#res');
const scoreBoard = document.querySelector('#playto');

let winningScore = 5;
let gameOver = false;

function updatedScore(player, opponent) { // we're geting all this from the object that we created above
    if (!gameOver) {
        player.score += 1; //whoever the player is at that time p1 or p2
        if (player.score === winningScore) {
            gameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');//this can go either direction depending what the values are at the time
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}



p1.button.addEventListener('click', function () {
    updatedScore(p1, p2)
})
p2.button.addEventListener('click', function () {
    updatedScore(p2, p1)
})

scoreBoard.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener('click', reset)

function reset() {
    gameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p2.display.classList.remove('has-text-success', 'has-text-danger');
    p1.button.disabled = false;
    p2.button.disabled = false;
}
     //the function below is the same as the function above. all we did is 
     // rewrote it using a loop with an array of p1 and p2 and refrenced them
     // to (p) in our for loop

// function reset() {
//     gameOver = false;
//     for(p of [p1,p2]){
//         p.score = 0;
//         p.display.textContent = 0;
//         p.display.classList.remove('has-text-success', 'has-text-danger');
//         p.button.disabled = false;
//     }
   
// }
