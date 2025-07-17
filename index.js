// to command multiple lines ctrl +k+c

let countEl=document.getElementById("count-el") //pass in arguments
console.log(countEl)

let count=0
 function increment() {
    console.log("clicked")
    count=count+1
    countEl.innerText=count
    console.log(count)
 }


let saveEl=document.getElementById("save-el")
 function save(){
    let countStr= count + " - "
    console.log("passenger count is " + (count))
    saveEl.textContent+= countStr // textContent an take the sapce in text and it is computationallu efficient than innerText
    reSet()

 }

 function reSet(){
    count=0
    countEl.textContent=count


 }