// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// Get all the table cells and assign them unique IDs
// Because we don't need to track the xy position of the user click, we don't need the overhead of a 2D array
let cells = document.getElementsByTagName('td')

for (let i = 0; i < cells.length; i++) {
  cells.id = i
  console.log(cells.id)
}

// Load sound effect
let sound = new Audio()
sound.src = 'whack-audio.wav'

// Display the first mole
getRandomCell().innerHTML = `<img id="mole" src="mole.PNG">`
let mole = document.getElementById('mole')

// When mole is clicked play a sound and move it to a different random cell
mole.onclick = (e) => {
  sound.play()
  moveMole(getRandomCell())
}

// Picks a random cell and returns it
function getRandomCell() {
  let id = Math.floor(Math.random() * cells.length)
  return cells[id]
}

// Moves mole to a new table cell by moving the mole DOM object to a new parent node
function moveMole(cell) {
  // Get rid of the old mole first
  // Save the deleted mole to be reused
  mole = mole.parentNode.removeChild(mole)

  // Put mole in the new cell
  cell.appendChild(mole)
}
