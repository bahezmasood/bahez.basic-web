// static with "${a}" with this.js
function abs(a){
return a<0? a*-1 : a;
}
console.log(abs(-43))
//  ocunt 
let t = 0;
let by=setInterval(() => {
console.log("count",++t)
if(t==5){
    clearInterval(by);
    console.log("count",t);
}


},
1000);
//
function cars(timer){
for(let i=timer;i>=0;--i){
if(i==0){
    console.log("Time's up!");
}
else{
setTimeout(()=> { 
    console.log(i);

},
         (timer-i)*1000)
}

}
}
(cars(5))


///
class Perosn{
static Person1(nurmin,shno ,kawa){
return `hello baby ${nurmin} hood ides ${shno} and ${kawa}`;


}
}
console.log(Perosn.Person1("lsrs","kd","lkdsf"))
///

const p3={

    name:"bahez",
    age:25,
    gender:"male",
    lara () {
return `everything is good in
   ${this.name}` },
    
}
p3.name ="lara"
console.log(p3.lara())   

// new update on javascript aboutoop
const student={
name:"xamo",
age:23,
marks:{
    krusidh:70,
    math:89,
    lara:94,
    science:90,
    english:80
}
}
console.log(student.marks.english)
///

p3={
arabic:34,
farsi:43,
engilish:34,
latiny:4334,
british:4334,
}
for(let key in p3){
    console.log(key  + "=" + p3[key]);
}
//p3={
english:43,
kursish:53
}
for(let key in p3){
console.log(key +"="+p3[key])
if(p3[key]<50){
    console.log("sorry you fail in :"+key +"="+p3[key])
}
else{
    console.log("you pass in :"+key +"="+p3[key])
}


}
///
p3={
arabic:53,
engilsh:65,
kurish:43,
 total(){
let v= (this.arabic+this.engilsh+this.kurish);
return v;
 } ,
 average (){
let s = `its ok`+ this.total()/3;
return s ;

 }

}
console.log(p3.total())
console.log(p3.average())
//
let p3 = {
  english: 43,
  kurdish: 54
};

// Add method to calculate total
p3.total = function() {
  let sum = 0;
  for (let key in this) {
    if (typeof this[key] === 'number') {
      sum += this[key];
    }
  }
  return sum;
};

// Add method to calculate average
p3.average = function() {
  let totalSubjects = 0;
  let sum = 0;
  for (let key in this) {
    if (typeof this[key] === 'number') {
      sum += this[key];
      totalSubjects++;
    }
  }
  return sum / totalSubjects;
};

console.log("Total:", p3.total());        // Output: Total: 97
console.log("Average:", p3.average());    // Output: Average: 48.5
// onst p3={
arabic :43,
english : 43,
math:55
}
p3.total=function (){ let k =0
for(var keys in p3){
    k+=p3[keys];
    return k;
}
}
p3.average=function (){
    var average1=p3.total()/3;
    return average1;
}
console.log(p3.average())
console.log(p3.total())
//
const j = "a";
const k ="ds";
let p3={
    j:j,
    k:k
};
console.log(`good idea for me and you ${j} ++ ${k}`);
//function creatObj(name,age){
return {name:name , age:age}
}
console.log(creatObj("shko",54))
//
const names=[54,45,54,45,54];
for(let keys in names){
    console.log(names[keys]);
}
//
const names=['aras','aram','shano','lara']
let ages=[20,21,19,22];
let f = names.length
console.log(f);
console.log(names[f-1]);
names[0]='bahez'
console.log(names[0])
//
const oddNumbers=[43,34,43,34,43,34,43];
for(let keys in oddNumbers){
console.log(oddNumbers[keys]);
}
console.log("555555555555");
for(let i = 0; i<oddNumbers.length;++i){
console.log(`oddNumber is`+ oddNumbers[i]);
}
const a2d=[ [4,3,4],   [43,43,43],[43,443,34]]
console.log(a2d[0][0]);

for( let i =0 ; i<a2d.length;++i){
for(let o=0;o<a2d[i].length;++o ){
console.log(a2d[i][o]);
}
}
//





