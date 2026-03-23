//show hide password logic


let passElement = document.getElementById("passEle")
let btnElement = document.getElementById("btn")

function showHidePass(){
    //alert("hello")

   if(btnElement.innerHTML == "show"){
    passElement.type = "text"
    btnElement.innerHTML = "hide"
   
   }

   else{
     passElement.type = "Password"
     btnElement.innerHTML = "show"
   
   }

}