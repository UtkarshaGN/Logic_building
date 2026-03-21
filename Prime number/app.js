//1. Check Prime number or not
//if_else condition
//break statement
//for loop

let userNum = Number(prompt("Enter a number "))

let midValue = Math.ceil(userNum / 2)

if (userNum <= 1) {
    console.log(userNum, " Not a Prime number")
}
else {

    let isPrime = true; // assumed

    for (let i = 2; i <= midValue; i++) {
        if (userNum % i == 0) {
            console.log(userNum, i)
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.write(userNum, "Prime number")
    }
    else {
        document.write(userNum, "Not a Prime Number")
    }
}

