//map() function

// let arr = [1,2,3,4,5]

// let new_arr = arr.map(
// function(d){
//      return d*5;
// }
// )
// console.log(new_arr)


// let names = ["JOhn", "kim", "KImi", "Rana"]
//  let new_names = names.map(
//     function(d){
//         //console.log(d)

//         //return d.toLowerCase()
//         return d.toUpperCase()
//     }
//  )
//  console.log(new_names)


//filter() function
//check the even numver only

let num = [12,45,67,88,90,34]

let new_arr = num.filter(
    function(d){
        //for odd num
        //if(d%2 !==0)
        if(d%2==0){
            return true;
        }
        else{
            return false;
        }
    }
)
console.log(new_arr)
