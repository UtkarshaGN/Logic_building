//Que1. Find the sum of an elements in an array
//used for loop, checked array. length and assumed sum=0

// let arr =[2,3,5,10]
// //console.log(arr)
//  let sum = 0;
// for(let i=0; i<arr.length; i++){
//     //console.log(i)
//     sum = arr[i] + sum
//     //1.sum = 2+0 =2
//     //2.sum = 3+2 =5
//     //3.sum = 5+5 =10
//     //4.sum = 10+10 =20
    
// }
// console.log(sum)



//Que2. Write a program to merge two arrays into single array
// method1 : we can use JavaScript in-built function concat()
// method2 : used for-of loop and push() method

// let arr1 = ["A", "B", "C", "D"]
// let arr2 = ["X", "Y", "Z"]

//using concat() method
// let newArray = arr1.concat(arr2)
// console.log(newArray)

//using logic
// let newArr = []; 
// for(let d1 of arr1){
//    // console.log(d1)
//  newArr.push(d1)
// }
// //console.log(newArr)

// for(let d2 of arr2){
//     newArr.push(d2)
// }

// console.log(newArr)



//Que3.  Write a program to reverse an array
//for loop , push() method.

//let arr = ["Jenny", "John", "Kim"]

//  arr.reverse()
//  console.log(arr)

let num = [10, 20, 30, 40, 50]
//let num = ["A", "B", "C" , "D"]
let newArr = []
for(let i = num.length-1;  i>=0; i--){
    console.log(num[i])
    newArr.push(num[i])
}
console.log(newArr)

