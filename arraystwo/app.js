//array methods - part2
//delete(), concat(), splice(), slice(), includes()

//delete() - Remove by index 
// doesn't change array length, element delete but it will give you return undefined or empty

// let arr = [12, 45, 67, 89, 68]

// delete arr[1]
// console.log(arr)

//concat()- merge arrays // return new array

// let fruits = ["Apple", "Banana", "Kiwi", "Orange"]

// let newFruits = ["Cherry", "Mango"]

// let final = fruits.concat(newFruits)
// console.log(final)

//splice()- Add/removes element in middle
//use - we can use this logic in To-do list app
// let todo = ["HTML", "CSS", "CSS3", "JS"]
// console.log(todo)
// let final = todo.splice(1,1)
// console.log(final)
// console.log(todo)

// let num = [10, 20, 30, 40]
// console.log(num)
// let addNum = num.splice(2, 2,70, 80)

// console.log(addNum)
// console.log(num)

//slice()- Extract subarray

// let m = [34, 56, 78, 90, 45]

// let res = m.slice(1, 3) // slice(start, end index) 56, 78
// console.log(res)

//include() - return true and false 

let names = ["ram", "ravi", "raba", "rana"]

console.log(names.includes("rama"))