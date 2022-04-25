// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

// Set an upper bound on inflation level
const maxInflation = 3

// Get all the unicorns
let unicorns = Array.from(document.getElementsByClassName('inflate-an-image'))

// Bind onclick listener and also add a state variable to track inflation
for (unicorn of unicorns) {
  unicorn.onclick = inflate
  unicorn.inflationLevel = 0
  unicorn.number = unicorns.indexOf(unicorn)
}

// Inflate the unicorn when clicked
function inflate(event) {
  // Extract the unicorn element from the event object passed from onclick
  unicorn = event.target

  // Check inflation level is not at max, inflate and swap out picture
  if (unicorn.inflationLevel < maxInflation) {
    unicorn.inflationLevel++
    unicorn.setAttribute(
      'src',
      `./images/unicorn-${unicorn.inflationLevel}.png`
    )

    // When max inflation reached unicorn says thank you
    if (unicorn.inflationLevel === maxInflation) {
      alert(`Unicorn #${unicorn.number} says thank you!`)
    }
  }
}
