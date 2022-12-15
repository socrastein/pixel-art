const canvas = document.getElementById("canvas");

// Assign colorSelect drop-down menu and selected color to variables
let colorSelection = document.getElementById("colorSelect");
let selectedColor = colorSelection.value;

// Assign gridSelect drop-down menu and selected size to variables
let gridSelection = document.getElementById("gridSelect");
let selectedSize = gridSelection.value;

// Assign eventlistener to color drop-down to setColor to selected color
colorSelection.addEventListener("change", setColor);

// Assign eventlistener to grid drop-down to fillPad with selected size
gridSelection.addEventListener("change", fillPad);

// Canvas is 288 x 288, so default 16x16 grid is 288/16 = 18
let pixelWidth = 18;
let pixelHeight = 18;

// Take selected grid size (i.e. 16x16) and fill canvas with div elements
function fillPad(size){

    for (i=1; i<size**2; i++){
        canvas.appendChild(document.createElement('div'));
    }

}

function setSize(size){

    let hw = 288 / size;

}