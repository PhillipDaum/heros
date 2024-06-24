//global variables
let r;
let userObj = [];

// pushes chosen hero to user's array, clears hero display, changes instructions
const pickAHero = function () {
    let chosenHero = this.id;
    for (let i = 0; i < heros.length; i++) {
        if (heros[i].name === chosenHero) {
            userObj.push(heros[i]);
            console.log(userObj)
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

// highlighting
function highlight01(event) {
    let cell = event.target;
    cell.classList.add('highlight-01');
}
function unHighlight(event) {
    let cell = event.target;
    cell.classList.remove('highlight-01');
}

// puts hero in one spot on the board
var putHero = (function () {
    var executed = false;
    return function () {
        if (!executed) {
            executed = true;
            let icon = userObj[0].icon;
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
            highlightMovementRange(hero);
        }
    };
})();

// generates a room
function roomGen(r) {
    let room = document.createElement("div");
    room.className = "room";
    room.id = "room" + r;
    document.getElementById("game").appendChild(room);
    for (var i = 0; i < 144; i++) {
        let cell = document.createElement('div');
        cell.className = "cell";
        cell.id = "cell-" + i;
        document.getElementById("room" + r).appendChild(cell);
    }
}

// highlight movement range around hero
function highlightMovementRange(hero) {
    if (!hero.position) {
        console.error("Hero's position is undefined.");
        return;
    }

    const currentCellId = parseInt(hero.position.split('-')[1]);
    const range = hero.movementSpeed;

    // Clear previous highlights
    document.querySelectorAll('.cell').forEach(cell => cell.classList.remove('highlight-02'));

    // Calculate the range of cells and highlight them
    for (let x = -range; x <= range; x++) {
        for (let y = -range; y <= range; y++) {
            if (Math.abs(x) + Math.abs(y) <= range) {
                const cellId = currentCellId + x + y * 12; // Adjust the multiplier based on your grid size
                highlightCell(cellId);
            }
        }
    }
}

// Helper function to add highlight class
function highlightCell(cellId) {
    const cell = document.getElementById(`cell-${cellId}`);
    if (cell) {
        cell.classList.add('highlight-02');
    }
}

// Function to move the hero to a new cell
const moveHero = function () {
    const hero = userObj[0];
    const currentCell = document.getElementById(hero.position);
    const newCell = this;
    const currentCellId = parseInt(hero.position.split('-')[1]);
    const newCellId = parseInt(newCell.id.split('-')[1]);

    const deltaX = Math.abs(newCellId % 12 - currentCellId % 12);
    const deltaY = Math.abs(Math.floor(newCellId / 12) - Math.floor(currentCellId / 12));

    if (deltaX + deltaY <= hero.movementSpeed) {
        // Move the hero to the new cell
        if (currentCell) currentCell.innerHTML = ''; // Clear the current cell
        newCell.innerHTML = hero.icon; // Move hero to the new cell
        hero.position = newCell.id; // Update hero's position

        // Clear highlights after moving
        document.querySelectorAll('.cell').forEach(cell => cell.classList.remove('highlight-02'));

        // Highlight the new movement range
        highlightMovementRange(hero);
    } else {
        console.error("Move exceeds hero's movement range.");
    }
}

//six side die roll
function rollSixSide() {
    let deeSix = Math.floor(Math.random() * 6) + 1; // Add 1 to get a value between 1 and 6
    console.log(deeSix);
}
rollSixSide();
