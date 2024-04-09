//rest parameters
const sum=(num1=0,num2=0,...numbers)=>{                   //three dots makes array automatically and initinally value start with zero is called default parameter
    let s=0;                                //...rest parameter like as array
    if(numbers.length>0){
    s=numbers.reduce((a,b)=>a+b);           // reduse keyword used to add value in the array
    }
    console.log("sum of numbers=",(num1+num2+s));
}
sum(32,23,54,76,98);