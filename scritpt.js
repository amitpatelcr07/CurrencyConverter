let change =document.querySelector(".img");
let rselect=document.querySelector(".rightCur");
let lselect=document.querySelector(".leftCur");

let swap=()=>{
    console.log("Left Value"+ rselect.value);
    console.log("Right Value"+ lselect.value);
}

change.addEventListener("click",swap);