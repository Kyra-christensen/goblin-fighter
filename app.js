// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';
const defeatedNumEl = document.querySelector('#defeated-num');
// const defeatedListEl = document.querySelector('.defeated-list');
const adventurerHpEl = document.querySelector('#adventurer-hp');
const adventurerImgEl = document.querySelector('#adventurer-img');
const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');

// let state
let defeatedGoblinsCount = 0;
let playerHP = 5;
let goblinsArray = [
    { name: 'Johnny', hp: 3 },
    { name: 'Adam', hp: 3 },
];
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const goblinName = data.get('goblin-name');

    const newGoblin = {
        name: goblinName,
        hp: Math.ceil(Math.random() * 3),
    };

    goblinsArray.push(newGoblin);

    displayGoblin();
});

function displayGoblin() {
//     - clear out the list DOM
    goblinListEl.textContent = '';
//     - loop through the goblins
    for (let goblin of goblinsArray) {
//     - render a new goblin DOM element for each item    
        const goblinEl = renderGoblin(goblin);
// now that we have a goblin element, we can make each goblin clickable like so
// this is a DYNAMIC EVENT LISTENER. we make a new event listener for every goblin!
// an event listner is a property just like anything else. just like text content, just like style. we add it to elements.
        if (goblin.hp > 0) {
            goblinEl.addEventListener('click', () => {
            // - Each goblin is clickable
            //   - On click . . .
            //     - possibly decrmement this goblin's HP
                if (Math.random() < .5) {
                    goblin.hp--;
                    alert('You hit ' + goblin.name);
                } else {
                    alert('You tried to hit ' + goblin.name + ' but missed!');
                }
             //  - possibly decrement player HP    
                if (Math.random() < .35) {
                    playerHP--;
                    alert('You got hit by ' + goblin.name);
                } else {
                    alert(goblin.name + ' tried to hit you but missed!');
                }
                
                if (playerHP === 0) {
                    alert('GAME OVER');
                    adventurerImgEl.classList.add('game-over');
                }

                if (goblin.hp === 0) {
                    defeatedGoblinsCount++;
                }

            //     - update the DOM with new goblin, player, and defeated goblin state.  
                adventurerHpEl.textContent = playerHP;
                defeatedNumEl.textContent = defeatedGoblinsCount;
                
                displayGoblin();
            });
        }
        // - append that element to the HTML
        goblinListEl.append(goblinEl);
    }
}

displayGoblin();