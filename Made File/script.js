let menu = document.querySelector("#icon")
const body = document.querySelector("body")

menu.addEventListener("click",function(){
   body.style.backgroundColor="black"
})

console.log(menu);



function mouseOver(element){
   element.style.color = "#838996"
}
function mouseOut(element){
   element.style.color="white"
}