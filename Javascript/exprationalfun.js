const msg=function message(){   //anomonus function if not give referance means without given name
    console.log("Welcoome to function expression");
};
msg();
const sum=function (num1,num2){
    let sum=num1+num2;
    console.log("sum=",sum);
}
sum(23,43);

const mul=function (num1,num2){
    return num1*num2;
};
console.log("multiply=",mul(23,6));