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

//array

const persons=["aman","arash","shine","preet","amna"]
persons.push("vivek")
persons.pop()
persons.unshift("anu")
persons.shift()

console.log(persons)

//make first letter capital of given string

let str="my name is aman";
let ans=str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).
join(' ')
console.log(ans)

//make second last letter capital of given string
const str1="this is beautiful flower";
const ans1=str1.split(' ').map(word=>{
    const n =word.length;
    return word.slice(0,n-2)+word.charAt(n-2).toUpperCase()+word.charAt(n-1)
}).join(' ')

console.log(ans1)

//set

let set = new Set()
set.add(1);
set.add(2);
set.add(2);
set.add(3);
set.add(4);
set.delete(2)

console.log(set)

//remove other element

const value=[1,2,3,4,5,6,7,8,9]
function remove(value){
    for( i=1;i<value.length;i++){
     value.splice(i,1)   
    }
return value;
}
console.log(remove(value))

