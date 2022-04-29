// if you update the values of some particular keys,they will get reflected in the method as well, because you are accessing the values from the same object using this keyword


var details={
    name:"suraj",
    age:27,
    print:function(){
        console.log(this.name,this.age)
    }
};

// printing
details.print();
// updating
details.name="ajay";
details["age"]=23;
console.log("\n------------")
// printing
details.print();
// updating
details.name="rohit";
details["age"]=45;
console.log("\n------------")
// printing
details.print();