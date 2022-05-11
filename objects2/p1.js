// problem 2 of IW Objects : Given a string, print the number of times each character appears
// like masai m is 1 time, a is 2 time,s is 1 time,i is 1 time
var str = "masai";
var obj = {};
for(var i =0;i<str.length;i++){
    let char = str[i];
    if(obj[char]==undefined){
        obj[char]=1;
    }
    else{
        obj[char]++;
    }
}
console.log(obj)