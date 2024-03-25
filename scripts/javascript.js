//const, var, let

const PI = 3.1415;

var x = 1;
console.log(x)
var y = 1.4;
console.log(y);
var z = "Hello";
console.log(z);
var a = [x, y, z];
console.log(a);
var lst = [1, "0", [1, 2], 4.8, true];
console.log(lst);
var obj = {
    name: "Mr X",
    job: "Hacker",
    age: 23,
    address: "Bangaluru"
}
console.log(obj)

let phone = {
    company: {
        name: 'Samsung',
        country: 'South Korea'
    },
    name: 'Galaxy',
    size: 6.5,
    weight: 200,
    color: ['blue', 'red', 'green']
}

let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello
World`;
console.log(str3)

let outcome = [[1, 3, 2, 4, 5, 6], 
               [4, 2, 1, 5, 3, 6], 
               [1, 6, 5, 2, 4, 3], 
               [4, 3, 1, 2, 6, 5], 
               [6, 5, 3, 8, 2, 1], 
               [4, 5, 6, 1, 2, 3]]
console.log(outcome[1][3])//5
console.log(outcome[4][3])//8

let D3 = [
           [
            [1, 2], 
            [1, 2]
           ], 
           [
            [1, 2], 
            [1, 2]
           ], 
           [
            [1, 2], 
            [1, 2]
           ]
        ]
        // 3 * 2