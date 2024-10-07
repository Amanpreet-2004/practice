//splice

let arr = [1, 2, 3, 4, 5,6,7,8,9];
arr.splice(1, 5);  
console.log(arr);

//slice

let arr1=[12,34,56,78,11,10,18]
let newArr =arr1.slice(3,6)
console.log(arr1)
console.log(newArr)

//arrow functions

const val=(a,b)=>a+b
console.log(val(3,8))

//normal function

let func=function(a,b,c){
    return a*b*c;
}
console.log(func(2,4,7))

//map

const Arr = [1,2,2,3,4,5,6,6,6,7,7,8];
const mp=new Map();
Arr.forEach((word)=>{
    if (mp.has(word)){
mp.set(word,mp.get(word)+1);
    }else{
        mp.set(word,1)
    }
})
console.log("mp",mp)