const canvas = document.getElementById("canvas");
let pixelColor = "black"

// Assign colorSelect drop-down menu and selected color to variables
let colorSelection = document.getElementById("colorSelect");
let selectedColor = colorSelection.value;

// Assign gridSelect drop-down menu and selected size to variables
let gridSelection = document.getElementById("gridSelect");
let selectedSize = gridSelection.value;

// Assign clearButton
let clearButton = document.getElementById("clearButton")


///////////////////// EVENT LISTENERS ///////////////////////////

// Assign eventlistener to color drop-down to setColor to selected color
colorSelection.addEventListener("change", setColor);

// Assign eventlistener to grid drop-down to fillPad with selected size
gridSelection.addEventListener("change", fillCanvas);

// Assign eventlistener to clear button
clearButton.addEventListener("click", eraseCanvas);



// Remove all children divs (pixels) before re-populating
// whenever new grid size is selected

function clearCanvas(){
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    console.log("Canvas has been cleared")

    return true;
}

function eraseCanvas(){
    let pixels = document.querySelectorAll('#canvas div');
    pixels.forEach((pixel) => pixel.style.backgroundColor = 'white');

}

function fillCanvas(){
    clearCanvas();

    let selectedSize = gridSelection.value;
    let heightWidth = 288 / selectedSize;
    let total = selectedSize * selectedSize;

    for (i=1 ; i <= total ; i++){
        canvas.appendChild(document.createElement('div'));
    }

    let pixels = document.querySelectorAll('#canvas div');

    pixels.forEach((pixel) => {
        pixel.style.height = `${heightWidth}px`;
        pixel.style.width = `${heightWidth}px`;
        pixel.addEventListener('click', () => {
            pixel.style.backgroundColor = `${selectedColor}`;
        })
    });

    // Log the size selection, total pixels and size of each pixel
    console.log(`Canvas set to ${selectedSize} x ${selectedSize}`)
    console.log(`${total} pixels of size ${heightWidth}`)

}

function setColor(){
    selectedColor = colorSelection.value;
    colorSelection.style.backgroundColor = selectedColor;
    console.log(`Color set to ${selectedColor}`);
}

fillCanvas()