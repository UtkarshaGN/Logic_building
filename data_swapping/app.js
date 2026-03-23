//data swapping
//addEventListener(), innerHTML, select element

let Para1= document.getElementById("para1")
let Para2 = document.getElementById("para2")
let btnEle = document.getElementById("btn")

btnEle.addEventListener("click", function(){
    let paraElement = Para1.innerHTML // value comes here
    let para2Element = Para2.innerHTML

    //console.log(paraElement)
    Para1.innerHTML = para2Element
    Para2.innerHTML = paraElement
})