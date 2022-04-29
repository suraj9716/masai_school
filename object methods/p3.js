// make your method dynamic

var details={
    print: function(name,state){
        console.log("My name is ",name)
        console.log("i am from",state)
    },
};

// how to call this method(function)?
details.print("suraj","Delhi");
details.print("Pida mota","Himachal"); //dot notation
// details["print"](); //bracket notation
// console.log(details);