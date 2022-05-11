// write a method to print your name place where you are from

// objects methods are function that are declared inside the object that perform specific operation on the object
var details={
    print: function(){
        console.log("My name is suraj")
        console.log("i am from delhi")
    },
};

// how to call this method(function)?
details.print(); //dot notation
details["print"](); //bracket notation
console.log(details);