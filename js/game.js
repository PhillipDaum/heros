//global variables
let r;
let h;
let health;
let userObj = [];
// gameboard corners: 0, 15, 240, 255 it appends class game wrapper 

// pushes chosen hero to user's array, clears hero display, changes instructions
const pickAHero = function () {
    let chosenHero = this.id;
    for (let i = 0; i < heros.length; i++) {
        if (heros[i].name === chosenHero) {
            userObj.push(heros[i]);
            console.log(userObj)
            // do i need this?
            break;
        }
    }
    let removeHeros = document.getElementById("hero-select");
    removeHeros.innerHTML = "";
    let changeTitleCard = document.getElementById("insruction-card");
    changeTitleCard.innerHTML = "<h2>now pick a spot</h2>";
    roomGen(r);
    // adds an event listener to all cells
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', putHero);
        cell.addEventListener('mouseover', highlight01);
        cell.addEventListener('mouseout', unHighlight);
    });
}

// shows heros to select
function displayHeros() {
    for (let i = 0; i < heros.length; i++) {
        let showHeros = document.createElement("div")
        showHeros.className = "card";
        showHeros.id = heros[i].name;
        showHeros.onclick = pickAHero;
        showHeros.innerHTML = ` ${heros[i].icon}
                        <h3>${heros[i].name}</h3>`;
        document.getElementById("hero-select").appendChild(showHeros)
    }
}
displayHeros();


// Define the highlight01 function
function highlight01(event) {
    let cell = event.target;
    // Your logic for highlighting the cell on mouseover
    cell.classList.add('highlight-01'); // Example logic to add highlight class
}
function unHighlight(event) {
    let cell = event.target;
    cell.classList.remove('highlight-01');
}


// puts hero in one spot on the board, clears top bar
// should this be an event??? 
var putHero = (function () {
    var executed = false;
    return function () {
        if (!executed) {
            executed = true;
            // do something
            let icon = userObj[0].icon
            let currentCell = document.getElementById(this.id);
            currentCell.innerHTML = icon;
            let changeTitleCard = document.getElementById("top-bar");
            changeTitleCard.innerHTML = "";
            document.querySelectorAll('.cell').forEach(cell => {
                cell.removeEventListener('click', putHero);
                cell.removeEventListener('mouseover', highlight01);
                cell.removeEventListener('mouseout', unHighlight);
                cell.addEventListener('click', moveHero);
            });
            currentCell.classList.remove('highlight-01');
            let hero = userObj[0];
            hero.position = currentCell.id;
            // remove highlight from it
            console.log(userObj);
        }
    };
})();


// generates a room
// change for first room only to be able to pick a spot
// toggle cell on click pointer
// remove the on click pointer, use the other way of doing that
// mmake a naming convention instead of r it will be like a, b, c, d, e, f....... 
// or maybe a different ID, i dunno 
function roomGen(r) {
    let room = document.createElement("div");
    room.className = "room";
    room.id = "room" + r;
    // figure out how to get it to spawn rooms in the right spot
    document.getElementById("game").appendChild(room);
    for (var i = 0; i < 144; i++) {
        let cell = document.createElement('div');
        cell.className = "cell";
        cell.id = "cell-" + i;
        cell.onclick = putHero;
        document.getElementById("room" + r).appendChild(cell);
    }
};


// highlight movement range around hero

const moveHero = function () {
    console.log("hi");
}

//six side die roll
function rollSixSide() {
    let deeSix = Math.floor(Math.random() * 6);
    console.log(deeSix);
}
rollSixSide();

// functions for damage

// function for regenerating health