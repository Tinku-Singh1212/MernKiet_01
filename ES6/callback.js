// const sum=(num1,num2)=>{
//     return "sum="+(num1+num2);
// }
// const print=(msg)=>{
//     console.log(msg);
// }
// let msg=sum(20,30);
// print(msg);


// const sum=(num1,num2)=>{
//     print("sum="+(num1+num2));
// }
// const print=(msg)=>{
//     console.log(msg);
// }
// sum(20,30);

// const sum=(num1,num2)=>{
//     print("sum="+(num1+num2));
// }
// const print=(msg)=>{
//     console.log(msg);
// }
// sum(20,30,print);


// const sum=(num1,num2)=>{
//      let s=num1+num2;
//      print("sum=",+s);
// }
// const print=(msg)=>{
//     console.log(msg);
// }
// sum(20,30,(msg)=>{
//     console.log(msg);
// });


const sum=(num1,num2,print)=>{
    let s=num1+num2;
    print(s);      /// callby is a print in this function
}                    // first class fuunction is kanown as those function which work as variable,callback,
//const print=(msg)=>{
 //  console.log(msg);
//}
sum(20,30,(sum)=>{          //sum(20,30, fufnction sum=())
    if(sum>20)
    {
        console.log("greator than 20");
    }
    else{
        console.log("less than 20");
    }
   //console.log(msg);
});