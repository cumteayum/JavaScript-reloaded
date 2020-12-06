// We can use any type of data type as keys

const map = new Map();
const k1 = 'MyString';
const k2 = {};
const k3 = function(){};

// Set values
map.set(k1, "This is a string");
map.set(k2, "This is an object");
map.set(k3, "This is a function");

// Get values
let v1 = map.get(k1);

// Get size
let size = map.size;

//we can loop using for-of to get keys and values
for(let [k, v] of map){
	console.log(k,v);
}

//get only keys
for(let k of map.keys()){
	console.log(k);
}

//get only values
for(let k of map.values()){
	console.log(k);
}

//we can loop using foreach
map.forEach((value, key) => {
	console.log("Key is ", key);
	console.log("Value is ", value);
})

//convert map to an array
let myArray = Array.from(map);

//convert only keys to array
let keysArray = Array.from(map.keys())

//convert only values to array
let valuesArray = Array.from(map.values())