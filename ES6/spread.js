const sum=(num1,num2,num3)=>{
    console.log("sum=",(num1+num2+num3));
}
//sum(21,34,65);
let value=[20,34,50,40,60];         //if adding more value in array then not take value left value
sum(...value);        // ... spread operator             ES6 advance javascript