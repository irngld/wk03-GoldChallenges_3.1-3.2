// What is needed for a guesing game?

// 1.  A range for our user to guess between. This should be 1-10.
// 2.  A randomized computer answer.
// 3.  A user guess that will provide a prompt
// 4.  A guess count (for loop variable declaration)
// 5.  gameLost = false


// Logic
// 1.  A way to validate the user guess
// 2.  Check if the user guess === the computer answer and alert that he / she won
// 3.  If the user guess is greater than the computer answer - nudge him or her to guess lower
// 4.  If the user guess is lower than the computer answer - nudge him or her to guess higher
// 5.  Handle the case when a user loses

// *** You will need to explore documentation on parseInt(), prompt, alert, Math.floor(), and Math.random()

//? not required:  If you liked to style it, feel free to add a stylesheet to your HTML.

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

let guessCnt = 5;
let gameLost = false;
let btnBegin = document.getElementById('btn-begin');
let pTag = document.querySelector('p')


function playAgain() {
    if (guessCnt !== 0) {
        ( confirm('You Win :) \nWould you like to play again?') ) ? play() : null;
    }
    else {
        gameLost = !gameLost;
        alert('You Lost :( ');
    }
}

let play = () => {
    (gameLost) ? guessCnt = 5 : null;
    btnBegin.innerText = "Play Again";
    let randomNo = Math.floor(Math.random() * 10) + 1;
    let verbiage = '';
    console.log(randomNo);
    pTag.innerText = "";
    
    for (guessCnt; guessCnt > 0; guessCnt-- ) {
        
        let guess = parseInt(prompt(`[Guess No: ${guessCnt}]\nEnter a Number betwen 1 - 10`, "0"), 10);
        
        if (guess === randomNo) {
            pTag.innerText = `Congratulations! You guessed the Random No (${randomNo}) correctly. Would you like to play again?`;
            pTag.setAttribute('style', 'color:green;')
            break;
        }
        else if (guess > randomNo) {
            verbiage = (guessCnt !== 1 ) ? `You have ${guessCnt-1} more guesses!\nSelect a number lower than ${guess} . . .` : `You have no more guesses.`;
            alert(`Oooh! close. ${verbiage}`);
        }
        else if (guess < randomNo) {
            verbiage = (guessCnt !== 1 ) ? `You have ${guessCnt-1} more guesses!\nSelect a number higher than ${guess} . . .` : `You have no more guesses.`;
            alert(`Oooh! close. ${verbiage}`);
        } 
        else {
            alert('Quitter :/');
            return null;
        }
        
    }
    playAgain();
}

btnBegin.addEventListener('click', play);


