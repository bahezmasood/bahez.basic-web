let b = Math.ceil(Math.random()*10)+1;
let t=null;
while(true){
    t=prompt("guss a number");
    t=Number(t);
    if(t==null || t==""){
        alert("you have to enter a number");
        console.log("you have to enter a number");
        break;
    }
    if(isNaN(t)){
        alert(" number");
    }
else if(t==b){
    console.log("your right")
}
 else if (t>b){
console.log("your wrong ");
}
else{
    console.log("your wrong");
}
};

let dd=null;
while(true){
    let cd= prompt("enter a age of your child");
    if(dd=null || dd=="")
        {
          alert("change your answer");
          break;
}
else {
    cd=Number(cd);

if(cd>18){
    console.log("no way")
}
else if(cd<18){
console.log("yes way");

}
}

};
let userchoice=prompt("scier , rock , paper");
let option =["scier","rock","paper"];
let computerchoice=option[Math.floor(Math.random()*options.length())]
while(true){
    if(userchoice==null || userchoice==""){
        alert("your wrong change your answer");
        break;
}
else if(usercomputerchoice==userchoice){
    console.log("enter one of other")
}
else if (userchoice=="rock" && computerchoice=="paper"){
    console.log("you lose");
};
console.log("you win anytimes in our ilfe "+ userchoice);
console.log("you lose"+computerchoice);
};

// BMI calculator 
let weight=prompt(Number("enter a number weight"));
let hight = prompt(Number("enter a numer of hight"));
let bmi=weight/(hight*hight);

if(weight , hight == null && weight , hight ==""){
console.log("everything is wrong");
 weight=prompt(Number("enter a number weight"));
 hight = prompt(Number("enter a numer of hight"));
 bmi=weight/(hight*hight);
}
else if (isNaN(hight,weight)){
    if (bmi==1){
        console.log("you are underweight");
    }
  console.log("lkjd")
};
