// loops in multidimensional array
//      0 1 2
//      | | |
// 0 ->[1,2,3]
// 1-> [4,5,6]
// 2-> [7,8,9]

// 00 01 02
// 10 11 12
// 21 22 23

// i for outer j is for inner
// i   j
// 0   0,1,2
// 1   0,1,2
// 2   0,1,2

// for i i have start from 0 and go to less than rows
// for j i start from 0 and goes from column
// for every i there is 3 value of j

// step 1 declare a 3x3 matrix multidimensional array
var items=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// step 2 find the number of rows and columns
var row = items.length;
var col = items[0].length;

// fixed will be outer loop and moving will be inner loop

for(var i =0;i<row;i++){
    var bag ="";
    for(var j =0;j<col;j++){
        bag+= items[i][j]+" ";
        // console.log(i,j) --> for printing index
    }
    console.log(bag)
}

