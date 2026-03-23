//simple calculator
//select elements
//target value attribute -  in DOM
//function and onclick event on button
//if_else_if condition


let Num1 = document.getElementById("num1")
let Num2 = document.getElementById("num2")
let Oper = document.getElementById("oper")
let Save = document.getElementById("save")

function calValue(){
    //alert("hello")
    let num1Value = Number(Num1.value)//10
    let num2Value = Number(Num2.value)//20
    let operValue = Oper.value;//+
   
    let outPut;

    if(operValue == "+"){
     outPut = num1Value + num2Value 
    }
    else if(operValue == "-"){
        outPut = num1Value - num2Value;
    }
    else if(operValue =="*"){
        outPut = num1Value*num2Value
    }
    else if(operValue =="/"){
        outPut = num1Value/num2Value
    }
    else{
        outPut = "invalid oper"
    }
 Save.value = outPut
}