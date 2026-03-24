//try - Try this code
//catch - Catch the error-Runs only if error happens in try, Handles the error so your app doesn’t crash
//finally - Run anyway-Always runs (error or no error)
//finally runs even if you use return inside try/catch


// let n;
// try{
//     n=a;
// }
// catch(error){
//     n= error.message
// }
// finally{
//     console.log(a)
// }


//with function
let n;

function errorShow(){
    try{
        n=a;

    }
    catch(error){
        n = error.message
        return;
    }
    finally{
     console.log(n)
    }
}

errorShow()