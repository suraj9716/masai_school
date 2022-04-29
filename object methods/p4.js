// write a method to add two numbers

// step 1 : do this using function
// function add (x,y){
//     console.log(x+y)
// }

// add(3,6);

// step 2 convert the function to method

var obj={
    name:"suraj",
    age:27,
    add : function (x,y){
        console.log(x+y);
    }
}
obj.add(3,6)