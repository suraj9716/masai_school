// Given a square matrix print both the diagonals

// 00 01 02
// 10 11 12
// 20 21 22

// left = 00,11,22 (i==j)
// right = 02,11,20 (i+j = rows-1)

var arr =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

var row = arr.length;
var col = arr[0].length;

var left = "";
var right ="";
for(var i =0;i<row;i++){
    for(var j =0;j<col;j++){
   if(i==j){
       left+=arr[i][j]+" ";
   }
   if(i+j==row-1){
       right+= arr[i][j]+" ";
   }
    }
}
console.log("left diagonal is",left);
console.log("right diagonal is",right)