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
console.log(set.has(4))

//remove other element

const value=[1,2,3,4,5,6,7,8,9]
function remove(value){
    for( i=1;i<value.length;i++){
     value.splice(i,1)   
    }
return value;
}
console.log(remove(value))


//trim()
let str2=" Amanpreet "
let trimedstr=str2.trim()
console.log(trimedstr)
console.log(str2)

//map,filter,reduce

const val1=[1,2,3,4,5,6,7]
const doubled=val1.map(val1 => val1*3)
const oddnum=val1.filter(oddnum=>oddnum%2 != 0)
const red=val1.reduce((acc,n)=>acc+n,0)
console.log(doubled)
console.log(oddnum)
console.log(red)

//objects

let obj={
    name:"aman",
    age:20,
    city:"chd",
    dob:"16jan,2004"
}
console.log(obj.city,obj.dob)

//spread operator

let num=[1,2,3,4,5]
let num2=[6,7,8,9]
let combined=[...num,...num2]
console.log(combined)

//rest operator

let fruits=["apple","mango","litchi","papaya","grapes"]
let [first,second, ...rest]=fruits
console.log(second)
console.log(first)
console.log(rest)

//destructuring of array

let games=["hockey","cricket","football","kho-kho"]
let [one,two,three,four]=games
console.log(two);
console.log(four)


//for...in and for...of in array

let number=[1,2,3,4,5,6,7]
for(let x of number){
    console.log(x)
}
for(let x in number){
    console.log(x)
}

//in object

let object={
    name:"aman",
    age:20,
    city:"chd"
}
for(let x in object){
    console.log(x)
}

//Object.assign()

let target={a:1};
let source={b:2, c:3};
Object.assign(target, source);
console.log(target);

//Object.freeze()
const objects={name :"aman"};
Object.freeze(objects);
objects.name="preet";
console.log(objects.name)

//higher order function

let numbers=[1,2,3,4,5]
let evenNumbers = numbers.filter(function(number){
return number %2!=0;
});
console.log(evenNumbers)

