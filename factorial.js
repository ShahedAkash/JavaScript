function factorial (numbers){
    let total = 1;
    for(let i=numbers ; i>=1 ; i--){
        total *= i;
    }
    return total;
}

let arr = 6;
let multiplyTotal = factorial(arr);
console.log(multiplyTotal);

// finding the largest number from an array

/* function largest(numbers){
    let largestNumber = numbers[0];
    for(let i=1; i<=numbers.length; i++){
        let index = numbers[i];
        if(largestNumber < index){
            largestNumber = index;
        }
    }
    return largestNumber;
}

let arrayNumber = [1,3,5,70,8,10];
let bigNumber = largest(arrayNumber);
console.log(bigNumber);

    // another way
let maxShortcut = Math.max(...arrayNumber);
console.log(maxShortcut); */


// Largest Name length Function
/* function largestName(names){
    let largestName = names[0];
    for(let i=1; i<names.length; i++){
        // let index = names[i];
        if(names[i].length > largestName.length){
            largestName = names[i];
        }
    }
    return largestName;
} */

function biggestFriend(friends){
    let biggest = friends[0];
    for(let i=1 ; i<friends.length ; i++){
        if(friends[i].length > biggest.length){
            biggest = friends[i];
        }
    }
    return biggest;
}

let arrayNames = ["shehed", "akash", "baker", "ove"];
let bigName = biggestFriend(arrayNames);
console.log(bigName);