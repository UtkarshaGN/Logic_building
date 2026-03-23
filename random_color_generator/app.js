//Random color generator
//querySelector
//addEventListener = event+function-callback and anonymous
//Math.random() and Math.floor()
//rgb color
//2. rgb(...)- This is a CSS function
//It mixes Red, Green, Blue colors
//rgb(255, 0, 0)   // Red color
//rgb(0, 255, 0)   // Green color
//rgb(0, 0, 255)   // Blue color
//Backticks `  - This is called a template literal in JavaScript.
//It allows you to insert variables inside a string using ${}


let btnElement = document.querySelector("button")
let bodyElement = document.querySelector("body")
btnElement.addEventListener("click", function(){
    //alert("hello")
    let r =  Math.floor(Math.random()*255)
     //console.log(r)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
   

  bodyElement.style.background = `rgb(${r}, ${g}, ${b})`
})