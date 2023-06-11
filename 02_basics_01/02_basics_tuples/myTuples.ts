// const user : (string|number)[] = [1, 'hello'] 
/*
// Tuples -->there are special situation where you want a specific thing into your array to be pushed on maybe that's an usually an API call because the API structure data is always in a very specific format if something comes up first in the narrate that always needs to come up at the zeroth position and something that needs to come up at second position that always comes like this so there is no restriction
*/

// TUPLES
const user : [string, number, boolean] = ['hello',2, true];
// example
let rgb :[number, number, number] = [255, 123, 112];

type User = [number, string]
const newUser:User = [1, 'hello'];
// newUser.push('this should not be allowed bcoz user only have length of 2');    // but it is allowed

export {}