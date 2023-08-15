// Write code that will go through each number from 1 to 100 and:
//---------For each number that is a multiple of 3, print "Fizz"
//---------For each number that is a multiple of 5, print "Buzz"
//---------For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
//---------All other numbers should just print normally 

var a = 1
var b = 100

for (var i = a; i <= b; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
}

