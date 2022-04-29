// objects methods are function that are declared inside the object that perform specific operation on the object
var details={
    name:"suraj",
    age:26,
    hindi:45,
    maths:78,
    end:87,
    // step 1:key and value
    // Function name will become the key
    // Function declaration will become the value
    print: function(){
        console.log("hello")
    }
};

// how to call this method(function)?
details.print(); //dot notation
details["print"](); //bracket notation
console.log(details);