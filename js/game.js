//global variables
let r;
let h;
let health;
let userObj = [];
// gameboard corners: 0, 15, 240, 255 it appends class game wrapper 

// pushes chosen hero to user's array, clears hero display, changes instructions
const pickAHero = function() {
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
      removeHeros.innerHTML= "";
      let changeTitleCard = document.getElementById("insruction-card");
      changeTitleCard.innerHTML="<h2>now pick a spot</h2>";
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


// puts hero in one spot on the board, clears top bar
//https://stackoverflow.com/questions/12713564/function-in-javascript-that-can-be-called-only-once
var putHero = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            // do something
            let icon = userObj[0].icon
            let put = document.getElementById(this.id);
            put.innerHTML = icon;
            let changeTitleCard = document.getElementById("top-bar");
            changeTitleCard.innerHTML="";
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
    room.id = "room"+r;
    // figure out how to get it to spawn rooms in the right spot
    document.getElementById("game").appendChild(room);
    for (var i = 0; i < 256; i++) {
        let cell = document.createElement('div');
        cell.className = "cell";
        cell.id = "cell-"+i;
        cell.onclick = putHero;
        document.getElementById("room"+r).appendChild(cell);
    }
};
roomGen(r);

// highlight movement range around hero


// function move
// id# of the users cell
// write an algorythm for movement with their respective speed
// https://docs.google.com/spreadsheets/d/1L_qN0skXF_JS7OqvG1i-F-Sm4NJQByNoq8eK3doOsdE/edit?usp=sharing
// `if cell id -${our thing}

//six side die roll
function rollSixSide() {
    let deeSix = Math.floor(Math.random() * 6);
    console.log(deeSix);
} 
rollSixSide ();

// functinos for damage

// function for regenerating health