let v = (num1,num2)=> {
if(typeof num1 !== 'number' || typeof num2 !== 'number'){
   return ;
}
return num1*num2;
};
v(3);
console.log(v(3,43));

// convert 
function good(v){
if(typeof v!=='number'){
return "error , nothing is in the output"


}
return (v*2.54) + ("cm")





}
console.log(good(4));


// convert 
function convert(inch){


return inch * 2.54 +"cm"
}



console.log(convert(43));



//
