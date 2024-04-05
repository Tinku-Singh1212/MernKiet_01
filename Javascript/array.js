const msg=()=>console.log("arrow function");
let data=[10,20,30,40.32,50.76,"kiet",msg];
console.log(data);
data[6]();

data.forEach(value=>console.log(`value of array=${value}`));

for(let value of data){
    console.log(`value of array=${value}`);
}

for(let index in data){
    console.log(`value of ${index} is ${data[index]}`);
}

for(let i=0;i<data.length;i++){
    console.log(`value of ${i} is ${data[i]}`);
}