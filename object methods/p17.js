var arr = [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	},
   
     
    
]
function greater (arr){
    console.log(arr.grade)
  var max = 0;
  var x =0;
   for(var i =0;i<arr.students.length;i++){
      var sum = 0;
       for(var j =0;j<arr.students[i].marks.length;j++){
          sum+= arr.students[i].marks[j]
       }
       if(sum>max){
           max=sum;
           x=i;
       }
   }
   console.log(arr.students[x].name,max)
}
for(var k =0;k<3;k++){
greater(arr[k])
}