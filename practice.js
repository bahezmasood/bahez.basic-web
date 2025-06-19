function sunnyNumber(number){

let s =Math.sqrt(number+1);
return s%1==0?true:false
};
sunnyNumer(55);
//
function checkNumber(name){
const t="aouieAOUIE";
for (let c of name){
    let g =0;
    if(t.includes(c)) g++;
    
}
return g;
}
console.log(chekNumber("no way in ou rlife"));
//
function checkNumber(name) {
    const t = "aouieAOUIE"; // All vowels
    let g = 0;              // Count of vowels

    for (let c of name) {
        if (t.includes(c)) {
            g++;
        }
    }

    return g;
}
console.log(checkNumber("haa wenl boyna za7tla zwenr boina"));
// 19 june 2025
