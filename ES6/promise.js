//promise give sum value or result in the form of ture or false if we not call the function 
// let age=20;
// const info=new Promise((resolve,reject)=>{
//    if(age>18){
//     resolve("you can vote");
//    }
//    else{
//     reject("you can not vote");
//    }
// })
// info.then(result=>console.log(result))
//     .catch(error=>console.log(error));



// const resultinfo=async ()=>{
//     let result=await info;
//     console.log(result);
// }    
// resultinfo();

let age=20;
const info=new Promise((resolve,reject)=>{
   if(age>18){
    resolve("you can vote");
   }
   else{
    reject("you can not vote");
   }
})
info.then(result=>console.log(result))
    .catch(error=>console.log(error));



const resultinfo=async ()=>{
    try{
    let result=await info;
    console.log(result);
    } 
    catch(error){
        console.log(error);
    }
}    
resultinfo();