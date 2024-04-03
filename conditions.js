//if(condition) {} else if(condition1) else {}
//==, ===, >, <, >=, <=, ||, &&, !

let pill = 'blue';
console.log(pill)

if(pill == 'red') {
    console.log('Reality')
} else if(pill == 'blue') {
    console.log('Stay in matrix')
} else {
    console.log('Kill yourself.')
}

//switch(variable) {case value1: {break;}}

switch(pill) {
    case 'red': {
        console.log('Reality');
        break;
    }
    case 'blue': {
        console.log('Stay in matrix');
        break;
    }
    default: {
        console.log('Kill yourself.')
        break;
    }
}
//....Questions
//check if number is even or odd

let number = 'one';
if(number % 2 == 0) {
    console.log('Number is even  ', number);
} else if(number % 2 == 1) {
    console.log('Number is odd  ', number);
} else {
    console.log('Invalid input');
}

//check if year is leap year

let year = 2024;

if(year % 100 == 0) {
    if(year % 400 == 0) {
        console.log('Leap year ', year)
    } else {
        console.log('Not a leap year')
    }
} else if(year % 4 == 0) {
    console.log('Leap year ', year)
} else {
    console.log('Not a leap year')
}

//check grade: A >= 80, 80 > B >= 60, 

let marks = 79;
let grade;
if(marks >= 80) {
    grade = 'A';
} else if(marks < 80 && marks >= 60) {
    grade = 'B';
} else if(marks < 60 && marks >= 40) {
    grade = 'C';
} else if(marks < 40 && marks >=0) {
    grade = 'D';
} else {
    grade = 'Undefined'
}
console.log('Grade ', grade);

//type of triangle
let a = 3,b = 4,c = 3;
if(a == b && b == c) {
    console.log('Triangle is equilateral')
} else if(a == b || b == c || c == a) {
    console.log('Triangle is isosceles')
} else {
    console.log('Triangle is scalene')
}

//numerial grad to letter grade