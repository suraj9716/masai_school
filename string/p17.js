// given an array of string count the oveall total number of character

var name = ["suraj","amit","rohan","ajay","rohit"]
var sum = 0;
for(var i =0;i<name.length;i++){
  console.log(name[i].length);
  sum = sum + name[i].length
}
console.log(sum);