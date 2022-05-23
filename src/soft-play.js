// ---ENGLISH---
// Enter 
// - Count each adult and child that enters the softplay
//     - There must be at lesst 1 adult for any children to enter

// Leave
// - The minus value in child must not exceed adult
// - The value for adult & child cannot drop below 0

// Occupancy
// - When a adult or child enters they should be added to the total
// - When they leave they should be removed from the total

// ---PSEUDO---
// Enter
// - If num of children entering is greater than num of adults FAIL
// - Else, PASS

// Leave
// - If num of children leaving is greater than num of adults FAIL
// - If num of children leaving will cause adult occupancy < child occupancy FAIL
// - If num of children OR adults occupancy to be below (0) FAIL
// - Else, PASS 

// Occupancy
// - When a adult or child enters add the number to their respective value
// - When a adult or child leaves subtract the number fromm their respective value

// do not change these lines

function reset () {
  adults = 0
  children = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.

// Input num of adults and children wanting to enter
// Output (true) if we let the people ein, (false) if we don't

function softEnter(adultEnter, childEnter) {
  if (childEnter > adultEnter) {
    return false;
  }
  adults = adults + adultEnter;
  children = children + childEnter;
  return true;
  }

softEnter(1, 1)
softEnter(1, 2)
softEnter(2, 1)

function softLeave(adultLeave, childLeave) {
  
}

function softOccupancy() {
 return {
   adults: 0,
   children: 0
 }
}

console.log(adults);
console.log(children);
console.log(Object.values(softOccupancy()));

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: softEnter,
  leave: softLeave,
  occupancy: softOccupancy,
  reset: reset
}
