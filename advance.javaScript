//
 const l={
skill:"no one",
name:"bahez"
 }
 for(let key in l){
if(l.skill=== "no"){
    console.log(key)
}
else console.log( " no one here");
 }
let array = [ 4,3,4]
for(let key of array){
console.log(key)
}
//
let n = "bahez"
let age = 44;
let shortHand={
    n ,age
}
console.log(shortHand);
shortHand={age:89,n:n};
console.log(shortHand);
let array = [4,3,4,43]
let array2=new Array(5);
for(let t = 0;t<array2.length;++t){
    console.log(array2[t]);
}
\\let t = [[4, 3, 4], [4, 3, 43]];

for (let tk = 0; tk < t.length; ++tk) {
    for (let ss = 0; ss < t[tk].length; ++ss) {
        console.log(t[tk][ss]);
    }
}

//
let t = [[4, 3, 4], [4, 3, 43]];

for (let tk = 0; tk < t.length; ++tk) {
    for (let ss = 0; ss < t[tk].length; ++ss) {
        // console.log(t[tk][ss]);
    }
}
let P=t.pop()
console.log(P);
let ttt=[34,2,43]
let sh=ttt.push(43,34)
console.log(sh); // length
console.log(ttt);// new array 
console.log(ttt.pop(2))
console.log(ttt)
  //
  let array =[4,3,4,3,4,3]
let count = array.findIndex (function(arrayFunction) {

if(arrayFunction==3){
     let k=array.indexOf(arrayFunction);
     
return k;
}
}
);
let t =[];
for (let i = 0; i<array.length;++i){
    if(array[i]===3){
t.push(i);
    }
}
console.log(t);
//let t = [43,,34,4,33,4]
let s = t.forEach(function(countNumber){
if(t[countNumber]>30){
    console.log(t[countNumber]);
}

}
);

t.forEach(function(value, index) {
    if (value > 30) {
        console.log(`Index ${index} , ${value}`);
    }
});
function  primeNumber(N){
for(let i = 2;i<N;++i){
if(N%i==0) return false;
else 
return true;

}
}
let t = primeNumber(55);
console.log(t);//
// armstrong 
function armstrong(number){
let t = number.toString()
let ttLength=t.length;
let sum=0;
for(let countNumber of t){
    let tNum=parseInt(countNumber) ** ttLength;
    sum+=tNum;
    return tNum==number?true:false;
   

}
}
console.log(armstrong(153));

function armstrong(number) {
    let t = number.toString();
    let ttLength = t.length;
    let sum = 0;

    for (let countNumber of t) {
        let tNum = parseInt(countNumber) ** ttLength;
        sum += tNum;
    }

    return sum === number;
}

console.log(armstrong(153)); // ✅ true
console.log(armstrong(55));  // ❌ false
//number 
function number (numberr)  {
let t = (numberr*2).toString()
let ttt=number.length
let tCharAt =t. charAt(ttt-1)==t.charAt(ttt-2)
return  t.charAt(ttt-1) == t.charAt(ttt-1);
}
console.log(number(1000));

.//



  
