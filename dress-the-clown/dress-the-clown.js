// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

// Get the head body shoes DOM objects
let head = document.getElementsByClassName('head')[0]
let body = document.getElementsByClassName('body')[0]
let shoes = document.getElementsByClassName('shoes')[0]

head.name = 'head'
body.name = 'body'
shoes.name = 'shoes'

// Set some starting conditions
head.outfit = 3
body.outfit = 4
shoes.outfit = 4

let bodyPart = head

let maxOutfits = 6

// If up/down pressed, change body part
// If left/right pressed, change outfit
document.onkeyup = (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') changeBodyPart(e.key)
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') changeOutfit(e.key)
}

// Cycles through body parts
function changeBodyPart(key) {
  if (key === 'ArrowDown') {
    switch (bodyPart) {
      case head:
        bodyPart = body
        break
      case body:
        bodyPart = shoes
        break
      case shoes:
        bodyPart = head
        break
    }
  }

  if (key === 'ArrowUp') {
    switch (bodyPart) {
      case head:
        bodyPart = shoes
        break
      case body:
        bodyPart = head
        break
      case shoes:
        bodyPart = body
        break
    }
  }

  // Update the "you are here"
  document.getElementById('youAreHere').innerHTML = bodyPart.name
}

// Cycles through outfits
function changeOutfit(key) {
  // Change outfit based on left or right keypress
  if (key === 'ArrowLeft') {
    if (bodyPart.outfit === 0) bodyPart.outfit = maxOutfits - 1
    else bodyPart.outfit--
  }

  if (key === 'ArrowRight') {
    if (bodyPart.outfit === maxOutfits - 1) bodyPart.outfit = 0
    else bodyPart.outfit++
  }

  // Update image
  bodyPart.src = `images/${bodyPart.name}${bodyPart.outfit}.png`
}
