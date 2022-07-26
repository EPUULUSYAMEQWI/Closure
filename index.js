// splice,push,pop,slice,shift.
let countries = ["Kenya", "Uganda", "Tanzania","Kakamega","Nairobi","Turkana"];
let counties = countries.splice(3);
let count = countries.push('Rwanda');
let counting = counties.shift();
let city=counties.sort();



// sort the city array in ascending order
let sortedArray = city.sort();
console.log(sortedArray);

// Output: [ 'Barcelona', 'California', 'Kathmandu', 'Paris' ]


// It lets you change the content of your array by removing or replacing existing elements 
// with new ones. This method modifies the 
// original array and returns the removed elements as a new array.23 Apr 2021

console.log(counties);
// shift remove first element from array
console.log(counting);
console.log(city);
// slice extracts up to but not including end. 
console.log(countries.slice(2,4));
// push it adds new items to the end of an array.
console.log(countries);
// The pop() method removes the last element from an array 
// and returns that value to the caller. If you call pop() 
console.log(countries.pop());
countries.pop();


// the if else scenario
// / Array Distructuring


// Object Distructuring



//Callback function
// setTimeout(function(){
//     console.log("High Class");
// }, 5000)

// let promise = new Promise(function(resolve, reject){
//     resolve("You passed")
// })
// console.log(promise)
// if else scenorio
let childPass = false
let promise = new Promise(function(resolve, reject){
   if (childPass){
    resolve("You Passed")
   }
   else{
    reject("You failed")
   }
})
// .then((result)=>result)
.then(()=>console.log("You are a smart child"))
.catch((error)=>{
    console.log(error)
    console.log("It is okay to fail")
    return error
})
.finally(()=>console.log("You can be whoever you want to be"))
// console.log(promise)



async function main(){
    let boy = await promise;
    console.log(boy);
    console.log("Promises are fun");
}
// the one that has a gift

let person = {
    name: "Amekwi",
    age:34,
    class: "High Class"

}

let{name, ...people} =person;
console.log(people)
