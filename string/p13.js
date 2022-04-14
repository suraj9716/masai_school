// count name which starts with a
var count = 0;
var name = ["Amit", "suraj", "manideep","Ankit","Aman","Venu"];
// var x = name [0];
// console.log(x);
// console.log(x[0]);
var count = 0;
for(var i = 0;i<name.length;i++){
  var x = name[i];
  if(x[0]=="a" || x[0]=="A"){
    count++
  }
}
console.log(count);