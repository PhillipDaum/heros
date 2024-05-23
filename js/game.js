// gameboard corners: 0, 9, 89, 100 it appends class game wrapper 


function roomGen() {
for (let i = 0; i < 100; i++) {
   let cell = document.createElement('div');
   cell.id = "cell-"+i;
   document.getElementById("game").appendChild(cell);
   //right now contents is hardcoded to an x in a p tag
   let contents = document.createElement("div");
   contents.innerHTML = "x";
   document.getElementById("cell-"+i).appendChild(contents);
};
}
roomGen();

document.getElementById("cell-06").innerHTML = '<i class="fa-solid fa-user-astronaut"></i>';

// I want the div to have a child
// the child is a template litera
// the variabiles are 

//first define variables

//user entry

//dice functions
function rollSixSide() {
    let deeSix = Math.floor(Math.random() * 6);
    console.log(deeSix);
} 
rollSixSide ();