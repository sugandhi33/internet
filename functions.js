//calculate area of rectangle

// function area(length = 1, width = 1) {
//     return length * width;
// }

let area = (length = 1, width = 1) => {
    return length * width;
}

console.log("Area = ", area(2))

//sum of an array

// function sumArray(a) {
//     let sum = 0;
//     for(let i = 0; i < a.length; i++) {
//         sum = sum + a[i];
//     }
//     return sum;
// }

let sumArray = (a) => {
    let sum = 0;
    for(let i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return sum;
}

console.log(sumArray([1, 4, 6, 9]))

//check palindrome 252
//reverse a string

function reverse(str) {//string => gnirts
    let revStr = "";
    for(let i = str.length - 1; i >= 0; i--) {
        revStr = revStr + str[i];
        // console.log(revStr)
    }
    return revStr;
}

console.log(reverse("Dayananda"))

function palindrome(n) {
    let strN = '' + n;
    let revN = reverse(strN);
    return strN == revN;
}
console.log(palindrome(12321))

// write a function that takes a number n as input and outputs the list of digits of the number
//a = []; a.push(5); a = [5]; a.push(1); a = [5, 1]

function digits(n) {
    let strN = '' + n;//convert to string
    let arr = [];//to store the digits
    for(let i = 0; i < strN.length; i++) {
        arr.push(Number(strN[i]))//put each digit one by one, first convert to Number
    }
    return arr;
}
console.log(digits(12345))