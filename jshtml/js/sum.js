const sumButton=document.getElementById("sum");
sumButton.addEventListener("click",()=>{
    let num1=prompt("enter the number 1","0");
    let num2=prompt("enter number 2","0");
    let result=`sum of (${num1},${num2}) is =${parseInt(num1)+parseInt(num2)};`
    document.getElementById("result").innerHTML=result;
});

// const sumButton=document.getElementById("sum");
// sumButton.addEventListener("click",()=>{
//     const oldData=document.getElementById("result").innerHTML;
//     document.getElementById("result").innerHTML=oldData+(2+2);
// });