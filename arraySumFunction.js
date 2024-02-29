/* function arraySum (inputArray){
    let numberBox = 0;
    for(let i = 0 ; i<inputArray.length ; i++){
        const inputedNum = inputArray[i];
        numberBox += inputedNum;
    }
    return numberBox;
} */

// Function using for of loop

function arraySum (inputArray){
    let numberBox = 0;
    for(let array of inputArray){
        const inputedNum = array;
        numberBox += inputedNum;
    }
    return numberBox;
}

let numbers = [12,23,14,31,56];
let numberSum = arraySum(numbers);
console.log(numberSum);

