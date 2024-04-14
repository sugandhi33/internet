function f() {
    try {
        console.log(0);
        throw "bogus";
    } catch (e) {
        console.log(1);
        // This return statement is suspended
        // until finally block has completed
        return true;
        console.log(2); // not reachable
    } finally {
        console.log(3);
        return false; // overwrites the previous "return"
        console.log(4); // not reachable
    }
    // "return false" is executed now
    console.log(5); // not reachable
}
console.log(f()); // 0, 1, 3, false

//throw "Error2"; // String type
//throw 42; // Number type
//throw true; // Boolean type
// throw {
//   toString() {
//     return "I'm an object!";
//   },
// };
let divide = (a, b) => {
    //divide a by b
    try {
        if(b !== 0) {
            return a / b;
        } else {
            throw "Division by 0"
        }
    } catch (e) {
        console.log(e);
        console.log('Why are you dividing by zero?')
    }
}
console.log(divide(1, 0));

  