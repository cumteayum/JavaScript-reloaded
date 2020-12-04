// create an array
let fruits = ['orange', 'lemon', 'mango', 'apple', 'banana'];

// Accessing all elements Way 1
// for(fruit in fruits){
// //     console.log(fruits[fruit]);
// }

// Accessing all elements Way 2
// for (fruit of fruits) {
//     console.log(fruit);
// }

// Append
fruits.push('lichy');
fruits.push('watermelon');

// Pop
fruits.pop()
// remove
fruits.splice(0,1) //removes the first element of the array

// sort
function sortarr(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-i-1; j++) {
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}

let nums = [9,2,4,1,5,6,3];
console.log(nums);
sortarr(nums);
console.log(nums);

// ANOTHER FUNCS

let cities = ["Mumbai", "Delhi", "Jaipur"];
cities.unshift("Pune");
cities.shift();
console.log(cities);