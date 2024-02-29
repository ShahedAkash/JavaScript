/* function cubeNumber(number) {
    if(typeof number != "number" ){
        return "invalid input";
    }else{
        number = Math.pow(number , 3);
        return number;
    }
}
let num = -3;
let numberCheck = cubeNumber(num);
console.log(numberCheck); */


/* function matchFinder(string1, string2) {
    if(typeof string1 != "string" || typeof string2 != "string"){
        return "invalid input";
    }else{
        if(string1.includes(string2)){
            return true;
        }else{
            return false;
        }
    }
}

console.log(matchFinder("Peter Parker",1)); */


/* function sortMaker(arr) {
    for (let i=0 ; i<arr.length ; i++){

        if ((arr[i] > 0) && (arr[i+1] > 0)) {

            if (arr[i] < arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                return [arr[i], arr[i+1]];

            } else if (arr[i] == arr[i+1]){
                return "equal";

            }else{
                return [arr[i], arr[i+1]];
            }
    
        } else {
            return "Invalid Input";
        }
    }
}

let inpNum = [8,"10"];
console.log(sortMaker(inpNum)); */


/* function findAddress(obj) {
    if(typeof obj != "object"){
        return "Input object";
    }else{
        const street = obj.street || "__" ;
        const house = obj.house || "__" ;
        const society = obj.society || "__" ;

        return `${street},${house},${society}`;
    }
}

let object1 = {street: 10, house: "15A",society: "Earth Perfect"}
let object2 = {street: 11, society: "Magura Saha Para"}
let object3 = {street: 12 }

console.log(findAddress(object3)) */


// function canPay(changeArray, totalDue) {
//     if(changeArray.length == 0){
//         return "empty array";
//     }else{
//         let myCash = 0;
//         for(let i=0 ; i<changeArray.length ; i++){
//             myCash += changeArray[i];
//         }
//         if(myCash >= totalDue){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// console.log(canPay([2,3],5));


function cubeNumber(number) {
    if(typeof number != "number" ){
        return "invalid input";
    }else{
        number = Math.pow(number , 3);
        return number;
    }
}


function matchFinder(string1, string2) {
    if(typeof string1 != "string" || typeof string2 != "string"){
        return "invalid input";
    }else{
        if(string1.includes(string2)){
            return true;
        }else{
            return false;
        }
    }
}


function sortMaker(arr) {
    for (let i=0 ; i<arr.length ; i++){

        if ((arr[i] > 0) && (arr[i+1] > 0)) {

            if (arr[i] < arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                return [arr[i], arr[i+1]];

            } else if (arr[i] == arr[i+1]){
                return "equal";

            }else{
                return [arr[i], arr[i+1]];
            }
    
        } else {
            return "Invalid Input";
        }
    }
}


function findAddress(obj) {
    if(typeof obj != "object"){
        return "Input object";
    }else{
        const street = obj.street || "__" ;
        const house = obj.house || "__" ;
        const society = obj.society || "__" ;

        return `${street},${house},${society}`;
    }
}


function canPay(changeArray, totalDue) {
    if(changeArray.length == 0){
        return "empty array";
    }else{
        let myCash = 0;
        for(let i=0 ; i<changeArray.length ; i++){
            myCash += changeArray[i];
        }
        if(myCash >= totalDue){
            return true;
        }else{
            return false;
        }
    }
}