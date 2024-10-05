const NewText  = document.getElementById('editor');
const AddText = document.getElementById('textInput');
//Increase Decrease
const Increase = document.getElementById('Fontsize');
function FontIncrease(){
	Increment = Number(Increase.value)+1
	NewText.style.fontSize = Increment+"px";
	Increase.value = Increment; 
}

function FontDecrease(){
	Increment = Number(Increase.value)-1
	NewText.style.fontSize = Increment+"px";
	Increase.value = Increment;
}


//Font-Family
function FontFamily(argu){
	NewText.style.fontFamily = argu.value;
}

//Font-Style

function FontStyle(argu){
	NewText.style.fontStyle = argu.value;
}

//Font-bold,bolder,ligher
function FontWeight(argu){
	NewText.style.fontWeight = argu.value;
}




let undoStack = [];
let redoStack = [];
// Function to save the current state
function saveState() {
    undoStack.push(NewText.innerHTML);
    redoStack = [];
    console.log(undoStack,redoStack)
}

// Initial state
saveState();



// Add text from input to textarea
document.getElementById('addText').addEventListener('click', () => {
    const TextInput = textInput.value
    const X = NewText.innerHTML
    document.getElementById('editor').innerHTML = X+" "+TextInput;
    AddText.value = "";
    saveState()
});
function undo() {
    if (undoStack.length > 1) {
        redoStack.push(undoStack.pop()); // Move the last state to redo stack
        NewText.innerHTML = undoStack[undoStack.length - 1]; // Restore previous state
    }
}


function redo() {
    if (redoStack.length > 0) {
        const redoValue = redoStack.pop(); // Get the last value from redo stack
        undoStack.push(redoValue);
        NewText.innerHTML= redoValue; // Restore the value

    }
}

document.getElementById('undo').addEventListener('click', undo);
document.getElementById('redo').addEventListener('click', redo);



//Move Text
let offsetX = 0, offsetY = 0;
const textElement = document.getElementById('editor');

textElement.addEventListener('mousedown', mouseDown);

function mouseDown(event) {
    // Calculate the offset between the mouse position and the element's position
    console.log(event)
    offsetX = event.clientX - textElement.offsetLeft;
    offsetY = event.clientY - textElement.offsetTop;

    // Add mousemove and mouseup event listeners to the document
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
}

function mouseMove(event) {
    // Update the position of the text element based on mouse movement
    const newX = event.clientX - offsetX;
    const newY = event.clientY - offsetY;

    textElement.style.left = newX + 'px';
    textElement.style.top = newY + 'px';
}

function mouseUp() {
    // Remove mousemove and mouseup event listeners when the mouse is released
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
}
