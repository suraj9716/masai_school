// given a string count a number of words in that string

var tagline = "I love masai school"; 
// so we have to find the number of spaces first
var count = 0;
if(tagline.length>0){
for(var i=0;i<tagline.length;i++){
  if(tagline[i]==" "){
    count++
  }
}}
console.log("words",count+1);
