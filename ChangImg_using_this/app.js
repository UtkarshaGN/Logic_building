let btnElement = document.getElementById("btn")
let Img = document.querySelector("#myImg")
// btnElement.addEventListener("click", function(){
//     //alert("hello")
//       Img.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfF37l26KljNaD9zhRN9T74pvnCWywGp6i37XeQfEkigK-6DVL8l7oxTY&s"

// })

//toggle back and forth

btnElement.addEventListener("click", function(){
    let isFirst = true;
    if(isFirst){
         Img.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfF37l26KljNaD9zhRN9T74pvnCWywGp6i37XeQfEkigK-6DVL8l7oxTY&s"
         isFirst = false
    }
    else{
        Img.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1w7_icgGvR00-b5_s4Ua1vm1X_VFi_bAqE7EF8OOKz88_7h3szIjAgfg&s"
        isFirst = true
    }
})

//like product img
//use this keyword in html page images
//<img id="myImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1w7_icgGvR00-b5_s4Ua1vm1X_VFi_bAqE7EF8OOKz88_7h3szIjAgfg&s"
//onclick = "changeImg(this")>
// let mainImg = document.getElementById("mainImage")

// function changeImg(currentImg){
//     mainImg.src = currentImg.src
// }

//What is currentImg?
//currentImg is just a parameter (variable name)
// // It represents the image that was clicked