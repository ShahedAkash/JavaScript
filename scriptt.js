// var i = 0;
// for (i=0; i<5; i++){};
// console.log(i);

// var marks = [ 13, 15, 14, 20, 18];
// for(var i=0; i<marks.length; i++){
//  if(marks[i] >=15){
//   continue;
//  }
//  console.log(marks[i]);
// };

// var objectName = {
//     name : 'baker',
//     height : '5.11',
//     live : 'magura'
// }
// var bakerAddress = Object.keys(objectName);
// // var info = Object.values(objectName);

// for(i=0; i<bakerAddress.length; i++){
//     var baddress = bakerAddress[i];
//     var detail = objectName[baddress];
//     console.log(baddress,' : ',detail);
// }

// for(var property in objectName){
//     const value = objectName[property];
//     console.log(property,' : ',value);
// }

// function getSumOfArray (numbers){
//     let sum = 0;
//     for(let i = 0 ; i < numbers.length ; i++){
//         const index = i;
//         const element = numbers[index]
//         sum += element;
//         // console.log(index , element, sum);
//     }
//     return sum;
// }

// const myNumbers = [12,41,52,66,76,98,25,1];
// const total = getSumOfArray(myNumbers);
// console.log(total);

// var number = 0;
// for (let i=0; i<10; i++){
//     let num = Math.round(Math.random()*10);
//     console.log(num);
// }

/* const number = -78; 
const answer = Math.abs(number); 

console.log(typeof(answer));

function add(a, b){
    return a + b;
   }
   console.log(add("adam" + "eve")) */

   /* function compare(a, b) {
    if (a == b) {
    return true;
    } else {
    return false;
    }
   }
   const result = compare(15, "15");
   console.log(result); */

   function compare(a, b) {
    if (a.toString() === b) {
    return true;
    } else {
    return false;
    }
   }
   const result = compare(25, 25);
   console.log(result);

   console.log("123" + 123);