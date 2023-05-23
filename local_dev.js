//Code a function that receives an array of integers 
//and returns an object containing the maximum, minimum and sum of the numbers. 
//Include unit tests and execute them from your CLI.

function arrayNumbers(array){
let sum = 0;

//"for" for each number
//define variable 
//define the end of the array 
//define how we change the variable between iterations
//for (let index = 0; index = arrayNumbers.length; index++){
    //sum = arrayNumbers[index] = sum

//}
array.forEach((element) => {
    console.log(element);
    sum += element;
}); 

return sum;
}

const array = [1, 2, 3];
const result = arrayNumbers(array);
console.log(result)