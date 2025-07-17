let num1=8
let num2=2
let sum=0
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2
 let sumEl=document.getElementById("sum-el")
function add(){
     console.log("add clicked")
    sumEl.textContent +=(num1+num2)
   
    
}

function sub(){
    console.log("sub clicked")
    sumEl.textContent +=(num1-num2)
}

function mul(){
    console.log("mul clicked")
    sumEl.textContent +=(num1 * num2)
}

function div(){
    console.log("div clicked")
    sumEl.textContent+=(num1/num2)
}