// count name which contains A

var count = 0;
var name = ["Amit", "Nurpul", "manideep","Yogesh","Aman","Venu"];
// var x = name [0];
// console.log(x);
// console.log(x[0]);
var count = 0;
for(var father = 0;father<name.length;father++){
  var x = name[father];
  console.log(x);
 for(var son =0;son<x.length;son++){
   if(x[son]=="a" || x[son]=="A"){
     count++;
     break;
   }
 }
}
console.log(count);