// create an object
// name:ram,age:24;
// hobbies:["coding","reading"]
// print:function(){};

// output
// hello ram
// age is 24
// hobbies are coding,reading

// very short method
var details={
    name:"Ram",
    age:24,
    hobbies:["coding","reading","Biking"],
    print :function(){
        console.log("hello",this.name)
        console.log("age is",this.age)
        var output = this.hobbies.join();
        console.log("Hobbies are",output)
    }
};
details.print()