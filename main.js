
/**
 * shuffle
 * 
 * @param array list of items to shuffle
 * 
 * returns a new array of items shuffled in a random order
*/

function shuffle(array){
   return array.sort(()=> .5 - Math.random())
}
const fruits = ['fig', 'kiwi', 'banana']

/**
 * tests shuffle function
*/
console.log(shuffle(fruits))