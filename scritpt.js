let change =document.querySelector(".img");
let rselect=document.querySelector(".rightCur");
let lselect=document.querySelector(".leftCur");
let convert=document.querySelector(".convert");
let display=document.querySelector(".dis");
let currency={
    INR: 85,
    Japan:34,
    UK:12,
    US:1
}

let money;
let swap=()=>{
   if(lselect.value!=rselect.value){
    let left=lselect.value
    let right=rselect.value;
    rselect.value=left;
    lselect.value=right;
    // console.log("Left Value"+ rselect.value);
    // console.log("Right Value"+ lselect.value);
   }else{
    alert("Both currency should not be same");
   }

}

change.addEventListener("click",swap);


let curConvert=()=>{
  Object.entries(currency).forEach(([key,val])=>{
    if(key===lselect.value){
        console.log(val);
        console.log(lselect.value);
        // money=((currency.rselect.value)/(currencylselect.value))*2;
         display.innerHTML=`2 ${lselect.value} is ${23} ${rselect.value}`;
    }
  })
}

convert.addEventListener("click",curConvert);





  
  