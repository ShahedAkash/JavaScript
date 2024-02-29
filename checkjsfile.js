function isJavaScriptFile(fileName){
    if(typeof fileName != "string"){
        return console.log("Please input a Valid File Type....");
    }else{
        /* if(fileName.toLowerCase().endsWith(".js") == true){
            return true;
        }else{
            return false;
        } */

    //    return fileName.toLowerCase().endsWith(".js");

       // Another way

        const inputSplit = fileName.split(".");
        const lastElement = inputSplit.pop();
        /* if(lastElement.toLowerCase() == "js"){
            return true;
        }else{
            return false;
        } */
        return lastElement.toLowerCase() == "js";
       
    }
}
let file = isJavaScriptFile("function.js");
console.log(file);

// Another task

function isLGseven (number){
    if(typeof number !== "number"){
        return console.log("Please input Number");
    }else{
        const output = number - 7;
        if(output < 7){
            return output;
        }else{
            return number * 2;
        }
    }
}

let num = 15;
let numberCheck = isLGseven(num);
console.log(numberCheck);

// Another Function of Good Number and Bad number

function detecting (num){
    for(let i=0; i<num.length; i++){
        let index = num[i];
        console.log(index)
    }
} 

let arrNum = [1,4,6,8,10,12];
let gubBadNum = detecting(arrNum);
console.log(gubBadNum);